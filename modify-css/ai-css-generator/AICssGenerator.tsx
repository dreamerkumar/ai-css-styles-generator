import React from "react";
import { useAICssGenerator } from "./useAICssGenerator";
import { ErrorDisplay } from "./ErrorDisplay";
import styled from "styled-components";
import { StyledButton } from "../../utils/buttonStyles";
import {
  textAreaContainerStyles,
  textAreaStyles,
} from "../../utils/textAreaStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--ai-spacing-medium);
  padding: var(--ai-spacing-medium);
  border: 1px solid var(--ai-color-neutral-600);
  border-radius: var(--ai-border-radius-medium);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LoadingButton = styled(StyledButton)<{ $disabled: boolean }>`
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

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
    <Container>
      <HeaderContainer>
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
      </HeaderContainer>
      <div style={{ ...textAreaContainerStyles, maxWidth: "450px" }}>
        <textarea
          style={textAreaStyles}
          rows={15}
          placeholder="Describe the CSS styles you want to generate..."
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <RadioContainer>
        <RadioLabel>
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
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name="cssMode"
            value="replace"
            onChange={(e) => setCssMode(e.target.value as "add" | "replace")}
          />
          {/*
           */}
          Replace
        </RadioLabel>
      </RadioContainer>
      <LoadingButton
        onClick={async () => {
          const css = await generateCssFromPrompt();
          if (css) {
            onCssGenerated(css, cssMode);
          }
        }}
        disabled={notReadyForGenerateCall()}
        $disabled={notReadyForGenerateCall()}
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
      </LoadingButton>
      {callInProgress && <div>Generating CSS...</div>}
      {!callInProgress && error && <ErrorDisplay error={error} />}
    </Container>
  );
};
