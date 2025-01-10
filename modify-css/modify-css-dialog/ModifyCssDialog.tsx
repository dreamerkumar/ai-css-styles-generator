import { useModifyCssDialog } from "./useModifyCssDialog";
import React, { useRef } from "react";
import { ModifyCss } from "../modify-css/ModifyCss";

export const ModifyCssDialog = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    onCloseModifyCssDialog,
    onSaveCss,
    validCssEntries,
    invalidCssEntries,
    onValidateAndPreview,
    readyToSave,
    setReadyToSave,
    savedContainerCss,
    onCssGenerated,
  } = useModifyCssDialog();

  const handleValidateAndPreview = () => {
    const cssValue = textareaRef.current?.value ?? "";
    onValidateAndPreview(cssValue);
  };

  const handleOnCssGenerated = (css: string, cssMode: "add" | "replace") => {
    const newValue =
      cssMode === "replace" || textareaRef.current!.value === ""
        ? css
        : `${textareaRef.current!.value}\n${css}`;
    textareaRef.current!.value = newValue;
    onCssGenerated(newValue);
  };

  const onChangeCss = () => {
    setReadyToSave(false);
  };

  return (
    <div className="modify-css-container">
      <ModifyCss
        onCssGenerated={handleOnCssGenerated}
        onChangeCss={onChangeCss}
        savedContainerCss={savedContainerCss}
        textareaRef={textareaRef}
        validCssEntries={validCssEntries}
        invalidCssEntries={invalidCssEntries}
        readyToSave={readyToSave}
      />
      {!readyToSave && (
        <div className="button-container">
          <button className="primary-button" onClick={handleValidateAndPreview}>
            Validate and Preview
          </button>
        </div>
      )}
      {readyToSave && (
        <div className="button-container">
          <button className="primary-button" onClick={onSaveCss}>
            Save
          </button>
        </div>
      )}
      <div className="button-container">
        <button className="secondary-button" onClick={onCloseModifyCssDialog}>
          Cancel
        </button>
      </div>
    </div>
  );
};
