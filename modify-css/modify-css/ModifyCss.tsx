import { ValidationResult } from "../validation-result/ValidationResult";
import { CssInput } from "../css-input/CssInput";
import { AICssGenerator } from "../ai-css-generator/AICssGenerator";

interface ModifyCssProps {
  onChangeCss: () => void;
  savedContainerCss: string[] | null;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  validCssEntries: string[];
  invalidCssEntries: string[];
  readyToUse: boolean;
  onCssGenerated: (css: string, cssMode: "add" | "replace") => void;
}

export const ModifyCss = ({
  onChangeCss,
  savedContainerCss,
  textareaRef,
  validCssEntries,
  invalidCssEntries,
  readyToUse,
  onCssGenerated,
}: ModifyCssProps) => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `start`,
        alignItems: `start`,
        paddingLeft: `var(--ai-spacing-medium)`,
        paddingRight: `var(--ai-spacing-medium)`,
        gap: `var(--ai-spacing-large)`,
      }}
    >
      <CssInput
        onChangeCss={onChangeCss}
        savedContainerCss={savedContainerCss}
        textareaRef={textareaRef}
      />
      <ValidationResult
        readyToUse={readyToUse}
        validCssEntries={validCssEntries}
        invalidCssEntries={invalidCssEntries}
      />
      <AICssGenerator onCssGenerated={onCssGenerated} />
    </div>
  );
};
