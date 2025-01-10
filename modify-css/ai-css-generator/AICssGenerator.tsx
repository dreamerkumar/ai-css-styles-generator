import React from "react";
import { useAICssGenerator } from "./useAICssGenerator";
import { ErrorDisplay } from "./ErrorDisplay";
import { buttonStyles } from "../../utils/buttonStyles";

export const AICssGenerator = ({
  onCssGenerated,
}: {
  onCssGenerated: (css: string, cssMode: "add" | "replace") => void;
}) => {
  const {
    setPrompt,
    generateCssFromPrompt,
    prompt,
    error,
    setCssMode,
    cssMode,
    callInProgress,
  } = useAICssGenerator();
  const notReadyForGenerateCall = () => {
    return !prompt || prompt.length <= 0 || callInProgress;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--sl-spacing-medium)",
        padding: "var(--sl-spacing-medium)",
        border: "1px solid var(--sl-color-neutral-300)",
        borderRadius: "var(--sl-border-radius-medium)",
        width: "450px",
        minWidth: "450px",
        maxWidth: "450px",
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
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3a9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9 9 9 0 0 0 9-9z" />
        </svg>
        <h3 style={{ margin: 0 }}>AI CSS Generator</h3>
      </div>

      <textarea
        placeholder="Describe the CSS styles you want to generate..."
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          minHeight: "300px",
          padding: "8px",
          borderRadius: "var(--sl-border-radius-medium)",
          border: "1px solid var(--sl-color-neutral-300)",
          resize: "vertical",
        }}
      />
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <input
            type="radio"
            name="cssMode"
            value="add"
            defaultChecked
            onChange={(e) => setCssMode(e.target.value as "add" | "replace")}
          />
          {/*
           */}
          Add to existing styles
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <input
            type="radio"
            name="cssMode"
            value="replace"
            onChange={(e) => setCssMode(e.target.value as "add" | "replace")}
          />
          {/*
           */}
          Replace
        </label>
      </div>
      <button
        onClick={async () => {
          const css = await generateCssFromPrompt();
          if (css) {
            onCssGenerated(css, cssMode);
          }
        }}
        disabled={notReadyForGenerateCall()}
        style={{
          ...buttonStyles.base,
          ...buttonStyles.primary,
          opacity: notReadyForGenerateCall() ? 0.6 : 1,
          cursor: notReadyForGenerateCall() ? "not-allowed" : "pointer",
        }}
      >
        {callInProgress ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            style={{
              animation: "spin 1s linear infinite",
            }}
          >
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray="62.83185307179586"
              strokeDashoffset="15.707963267948966"
            />
          </svg>
        ) : (
          "Generate CSS"
        )}
      </button>
      {callInProgress && <div>Generating CSS...</div>}
      {!callInProgress && error && <ErrorDisplay error={error} />}
    </div>
  );
};
