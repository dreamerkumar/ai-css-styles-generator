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
        style={{
          width: `100%`,
          padding: `12px`,
          fontSize: `14px`,
          fontFamily: `monospace`,
          lineHeight: `1.5`,
          border: `1px solid #ccc`,
          borderRadius: `6px`,
          resize: `vertical`,
          backgroundColor: `var(--ai-color-primary-900)`,
          color: `var(--ai-color-primary-100)`,
          outline: `none`,
          transition: `border-color 0.2s, box-shadow 0.2s`,
        }}
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
