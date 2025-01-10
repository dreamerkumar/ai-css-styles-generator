import React, { useEffect } from "react";

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
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        maxHeight: `800px`,
        maxWidth: `600px`,
        width: `600px`,
        overflow: `auto`,
      }}
    >
      <textarea
        ref={textareaRef}
        onChange={onChangeCss}
        onInput={onChangeCss}
        rows={30}
        style={{ width: `100%` }}
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
