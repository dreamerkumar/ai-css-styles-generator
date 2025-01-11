import React, { useEffect } from "react";
import {
  textAreaContainerStyles,
  textAreaStyles,
} from "../../utils/textAreaStyles";

interface CssInputProps {
  onChangeCss: () => void;
  savedContainerCss: string[] | null;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}

export const CssInput: React.FC<CssInputProps> = ({
  onChangeCss,
  savedContainerCss,
  textareaRef,
}) => {
  useEffect(() => {
    if (textareaRef.current && savedContainerCss?.length) {
      textareaRef.current.value = savedContainerCss.join(";\n");
    }
  }, [savedContainerCss, textareaRef]);

  return (
    <div style={textAreaContainerStyles}>
      <textarea
        ref={textareaRef}
        onChange={onChangeCss}
        onInput={onChangeCss}
        rows={30}
        style={textAreaStyles}
        placeholder={`Enter CSS as key-value pairs on separate lines
Examples:
background-color: lightgrey;
border: 1px solid black;
padding: 10px;
border-radius: 4px;`}
      />
    </div>
  );
};
