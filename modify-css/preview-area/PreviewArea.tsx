import styled from "styled-components";
import React from "react";

const Container = styled.div`
  border: 1px solid blue;
  width: 100%;
  max-width: 350px;
  height: 270px;
  max-height: 270px;
  overflow: auto;
  border-radius: var(--ai-border-radius-medium);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: var(--ai-spacing-small);
`;

const PreviewDiv = styled.div<{ $cssString: string }>`
  ${(props) => props.$cssString}
`;

interface PreviewAreaProps {
  validCssEntries: string[];
  readyToUse: boolean;
}

export const PreviewArea: React.FC<PreviewAreaProps> = ({
  validCssEntries,
  readyToUse,
}) => {
  const [useFixedSize, setUseFixedSize] = React.useState(true);
  const [usePadding, setUsePadding] = React.useState(true);
  const [previewText, setPreviewText] = React.useState(
    "This is how text will look inside the box"
  );

  const cssString = React.useMemo(() => {
    const styles = [...validCssEntries];
    if (useFixedSize) {
      styles.push("width: 320px", "height: 244px");
    }
    if (usePadding) {
      styles.push("padding: 10px");
    }
    return styles.join(";\n");
  }, [validCssEntries, useFixedSize, usePadding]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ai-spacing-large)",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <h3 style={{ margin: 0 }}>Preview</h3>
      </div>
      <h5
        style={{
          margin: `0`,
          marginBlockStart: `0`,
          marginBlockEnd: `0`,
          paddingLeft: `10px`,
          color: `var(--ai-color-neutral-700)`,
        }}
      >
        {validCssEntries.length && readyToUse
          ? "Your CSS styles are now applied to the preview box below"
          : "Add CSS styles and click 'Validate and Preview' to see them in action below"}
      </h5>
      {readyToUse && (
        <>
          <Container>
            <PreviewDiv $cssString={cssString}>{previewText}</PreviewDiv>
          </Container>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--ai-spacing-large)",
              backgroundColor: "var(--ai-color-primary-100)",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ margin: `0`, padding: `10px` }}>Preview Defaults</h2>
              <h5
                style={{
                  margin: `0`,
                  marginBlockStart: `0`,
                  marginBlockEnd: `0`,
                  paddingLeft: `10px`,
                  color: `var(--ai-color-neutral-700)`,
                }}
              >
                Won&apos;t be applied to the actual element
              </h5>
            </div>
            <label
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <input
                type="checkbox"
                checked={useFixedSize}
                onChange={(e) => setUseFixedSize(e.target.checked)}
              />
              {/*
               */}
              Set fixed size (320x244px)
            </label>

            <label
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              Preview Text:
              {/*
               */}
              <input
                type="text"
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                style={{ padding: "4px" }}
              />
            </label>
            <label
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <input
                type="checkbox"
                checked={usePadding}
                onChange={(e) => setUsePadding(e.target.checked)}
              />
              {/*
               */}
              Add padding (10px)
            </label>
          </div>
        </>
      )}
    </div>
  );
};
