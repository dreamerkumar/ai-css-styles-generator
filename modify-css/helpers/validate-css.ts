// validateCss.ts
import postcss, { Root } from "postcss";

/**
 * Defines the return shape of our validation function.
 */
export interface ValidationResult {
  isValid: boolean;
  error: string | null;
}

/**
 * Validates a CSS string by checking:
 *  1. Syntax (parse fails => invalid).
 *  2. Disallowed @import.
 *  3. Disallowed url(...) or expression(...).
 *  4. Likely JS code patterns (<script>, javascript:, etc.).
 *  5. Old IE/Mozilla proprietary features (behavior: url(...), -moz-binding).
 *  6. External resource references (http://, https://).
 *  7. Obscure vendor prefixes (-khtml, -webkit, binding:).
 *  8. Base64 data URIs (data:).
 *
 * Returns an object { isValid, error }.
 * If invalid, includes an error message explaining why.
 */
export default function validateCss(cssString: string): ValidationResult {
  // Lowercase for case-insensitive matching of suspicious substrings
  const lowerCssString = cssString.toLowerCase();

  // Common JS/HTML injection patterns
  const jsPatterns: string[] = [
    "<script>", // e.g., <script> or </script>
    "</script>",
    "javascript:", // e.g., background:url("javascript:alert('XSS')")
    "function(", // naive check for typical JS function syntax
    "=>", // arrow functions in JS
    "alert(", // common pop-up usage
  ];

  // 0. Quick check for potential embedded JS patterns
  for (const pattern of jsPatterns) {
    if (lowerCssString.includes(pattern)) {
      return {
        isValid: false,
        error: `Disallowed JavaScript pattern found: "${pattern}"`,
      };
    }
  }

  // 1. Validate CSS syntax by parsing with PostCSS
  let ast: Root;
  try {
    ast = postcss.parse(cssString);
  } catch (parseError: any) {
    return {
      isValid: false,
      error: `CSS parsing error: ${parseError.message}`,
    };
  }

  // 2. Walk the AST to detect disallowed constructs
  let invalidReason: string | null = null;

  // 2a. Disallow @import
  ast.walkAtRules("import", () => {
    invalidReason = "Disallowed usage of @import.";
  });

  // 2b. Check each declaration
  ast.walkDecls((decl) => {
    const lowerProp = decl.prop.toLowerCase();
    const lowerValue = decl.value.toLowerCase();

    // url(...) or expression(...)
    if (lowerValue.includes("url(") || lowerValue.includes("expression(")) {
      invalidReason =
        "Disallowed usage of url(...) or expression(...) in CSS declarations.";
    }

    // Old IE/Edge / Mozilla proprietary: behavior, -moz-binding
    if (lowerProp.includes("behavior") || lowerProp.includes("-moz-binding")) {
      invalidReason =
        "Disallowed usage of old IE/Mozilla proprietary features (behavior, -moz-binding).";
    }
    if (
      lowerValue.includes("behavior:") ||
      lowerValue.includes("-moz-binding")
    ) {
      invalidReason =
        "Disallowed usage of old IE/Mozilla proprietary features (behavior, -moz-binding).";
    }

    // External resource references (http://, https://)
    if (lowerValue.includes("http://") || lowerValue.includes("https://")) {
      invalidReason =
        "Disallowed usage of external resource references in CSS.";
    }

    // Obscure vendor prefixes / binding:
    if (
      lowerProp.includes("-khtml") ||
      lowerProp.includes("-webkit") ||
      lowerProp.includes("binding")
    ) {
      invalidReason =
        "Disallowed usage of vendor-specific or legacy features (-khtml, -webkit, binding).";
    }
    if (
      lowerValue.includes("-khtml") ||
      lowerValue.includes("-webkit") ||
      lowerValue.includes("binding:")
    ) {
      invalidReason =
        "Disallowed usage of vendor-specific or legacy features (-khtml, -webkit, binding).";
    }

    // Base64 data URIs (data:)
    if (lowerValue.includes("data:")) {
      invalidReason =
        "Disallowed usage of data: URIs in CSS (potentially malicious payload).";
    }
  });

  // If any reason triggered an invalid CSS, return it
  if (invalidReason) {
    return {
      isValid: false,
      error: invalidReason,
    };
  }

  // If we reached here, everything passed
  return {
    isValid: true,
    error: null,
  };
}
