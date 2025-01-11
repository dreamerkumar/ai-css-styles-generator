import { useModifyCssContainer } from "./useModifyCssContainer";
import React, { useRef } from "react";
import { ModifyCss } from "../modify-css/ModifyCss";
import { StyledButton } from "../../utils/buttonStyles";

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
  } = useModifyCssContainer();

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
    setReadyToUse(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
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
        <StyledButton onClick={handleValidateAndPreview}>
          Validate and Preview
        </StyledButton>
      )}
      {readyToUse && (
        <StyledButton onClick={copyToClipboard}>Copy to Clipboard</StyledButton>
      )}
    </div>
  );
};
