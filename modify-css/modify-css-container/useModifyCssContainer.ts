import { useState } from "react";
import validateCss from "../helpers/validate-css";

export const useModifyCssContainer = (initialCss: string[] = []) => {
  const onCssGenerated = (css: string) => {
    onValidateAndPreview(css);
  };
  const [validCssEntries, setValidCssEntries] = useState<string[]>(initialCss);
  const [invalidCssEntries, setInvalidCssEntries] = useState<string[]>([]);
  const [readyToUse, setReadyToUse] = useState(false);

  const onValidateAndPreview = (cssText: string) => {
    if (!cssText || typeof cssText !== "string" || cssText.length === 0) {
      setValidCssEntries([]);
      setInvalidCssEntries([]);
      setReadyToUse(true);
      return;
    }
    const { isValid, error } = validateCss(cssText);
    if (isValid) {
      setValidCssEntries([cssText]);
      setInvalidCssEntries([]);
      setReadyToUse(true);
      return;
    }
    setValidCssEntries([]);
    setInvalidCssEntries([error ?? "An error occurred while validating CSS"]);
    setReadyToUse(false);
  };

  const copyToClipboard = async () => {
    try {
      if (validCssEntries.length > 0) {
        await navigator.clipboard.writeText(validCssEntries.join("\n"));
        console.log("CSS copied to clipboard");
      }
    } catch (error) {
      console.error("Failed to copy CSS to clipboard:", error);
    }
    setReadyToUse(false);
  };

  return {
    savedContainerCss: [],
    onValidateAndPreview,
    validCssEntries,
    invalidCssEntries,
    copyToClipboard,
    readyToUse,
    setReadyToUse,
    onCssGenerated,
  };
};
