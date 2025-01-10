import { useState } from "react";
import validateCss from "../helpers/validate-css";

export const useModifyCssDialog = (initialCss: string[] = []) => {
  const onCssGenerated = (css: string) => {
    onValidateAndPreview(css);
  };
  const [validCssEntries, setValidCssEntries] = useState<string[]>(initialCss);
  const [invalidCssEntries, setInvalidCssEntries] = useState<string[]>([]);
  const [readyToSave, setReadyToSave] = useState(false);

  const onCloseModifyCssDialog = () => {
    console.log("onCloseModifyCssDialog");
  };

  const onValidateAndPreview = (cssText: string) => {
    if (!cssText || typeof cssText !== "string" || cssText.length === 0) {
      setValidCssEntries([]);
      setInvalidCssEntries([]);
      setReadyToSave(true);
      return;
    }
    const { isValid, error } = validateCss(cssText);
    if (isValid) {
      setValidCssEntries([cssText]);
      setInvalidCssEntries([]);
      setReadyToSave(true);
      return;
    }
    setValidCssEntries([]);
    setInvalidCssEntries([error ?? "An error occurred while validating CSS"]);
    setReadyToSave(false);
  };

  const onSaveCss = () => {
    console.log("onSaveCss");
    setReadyToSave(false);
  };

  return {
    savedContainerCss: [],
    onValidateAndPreview,
    onCloseModifyCssDialog,
    validCssEntries,
    invalidCssEntries,
    onSaveCss,
    readyToSave,
    setReadyToSave,
    onCssGenerated,
  };
};
