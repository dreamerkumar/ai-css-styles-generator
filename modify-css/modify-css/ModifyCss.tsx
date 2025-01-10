import { ValidationResult } from "../validation-result/ValidationResult";
import { CssInput } from "../css-input/CssInput";
import { AICssGenerator } from "../ai-css-generator/AICssGenerator";

interface ModifyCssProps {
  onChangeCss: () => void;
  savedContainerCss: string[] | null;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  validCssEntries: string[];
  invalidCssEntries: string[];
  readyToSave: boolean;
  onCssGenerated: (css: string, cssMode: "add" | "replace") => void;
}

export const ModifyCss = ({
  onChangeCss,
  savedContainerCss,
  textareaRef,
  validCssEntries,
  invalidCssEntries,
  readyToSave,
  onCssGenerated,
}: ModifyCssProps) => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `start`,
        alignItems: `start`,
        paddingLeft: `var(--sl-spacing-medium)`,
        paddingRight: `var(--sl-spacing-medium)`,
        gap: `var(--sl-spacing-large)`,
      }}
    >
      <CssInput
        onChangeCss={onChangeCss}
        savedContainerCss={savedContainerCss}
        textareaRef={textareaRef}
      />
      <ValidationResult
        readyToSave={readyToSave}
        validCssEntries={validCssEntries}
        invalidCssEntries={invalidCssEntries}
      />
      <AICssGenerator onCssGenerated={onCssGenerated} />
    </div>
  );
};
