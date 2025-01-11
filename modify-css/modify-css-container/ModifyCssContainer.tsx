import { useModifyCssContainer } from "./useModifyCssContainer";
import React, { useRef } from "react";
import { ModifyCss } from "../modify-css/ModifyCss";
import { StyledButton } from "../../utils/buttonStyles";
import toast from "react-hot-toast";

export const ModifyCssContainer = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    copyToClipboard,
    validCssEntries,
    invalidCssEntries,
    onValidateAndPreview,
    readyToUse,
    setReadyToUse,
    savedContainerCss,
    onCssGenerated,
    content,
    setContent,
  } = useModifyCssContainer();

  const copyToClipboardHandler = async () => {
    const success = await copyToClipboard();
    if (success) {
      toast.success("CSS copied to clipboard");
    } else {
      toast.error("Failed to copy CSS to clipboard");
    }
  };

  const handleValidateAndPreview = () => {
    const cssValue = textareaRef.current?.value ?? "";
    onValidateAndPreview(cssValue);
  };

  const handleOnCssGenerated = (css: string, cssMode: "add" | "replace") => {
    const newValue =
      cssMode === "replace" || textareaRef.current.value === ""
        ? css
        : `${textareaRef.current.value}\n${css}`;
    textareaRef.current.value = newValue;
    onCssGenerated(newValue);
  };

  const onChangeCss = () => {
    setContent(textareaRef.current?.value ?? "");
    setReadyToUse(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        paddingBottom: `var(--ai-spacing-large)`,
      }}
    >
      <ModifyCss
        onCssGenerated={handleOnCssGenerated}
        onChangeCss={onChangeCss}
        savedContainerCss={savedContainerCss}
        textareaRef={textareaRef}
        validCssEntries={validCssEntries}
        invalidCssEntries={invalidCssEntries}
        readyToUse={readyToUse}
      />
      {!readyToUse && (
        <StyledButton
          onClick={handleValidateAndPreview}
          disabled={content.length === 0}
        >
          Validate and Preview
        </StyledButton>
      )}
      {readyToUse && (
        <StyledButton onClick={copyToClipboardHandler}>
          Copy to Clipboard
        </StyledButton>
      )}
    </div>
  );
};
