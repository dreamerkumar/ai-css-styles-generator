import styled from "styled-components";
import React from "react";
import { InvalidCssDisplay } from "../invalid-css-display/InvalidCssDisplay";
import { PreviewArea } from "../preview-area/PreviewArea";

const Column = styled.div`
  width: 380px;
  min-width: 380px;
  max-width: 380px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: var(--ai-spacing-small);
  padding: var(--ai-spacing-medium);
  border: 1px solid var(--ai-color-neutral-300);
  border-radius: var(--ai-border-radius-medium);
`;

interface ValidationResultProps {
  validCssEntries: string[];
  invalidCssEntries: string[];
  readyToUse: boolean;
}

export const ValidationResult: React.FC<ValidationResultProps> = ({
  validCssEntries,
  invalidCssEntries,
  readyToUse,
}) => {
  return (
    <Column>
      <InvalidCssDisplay invalidCssEntries={invalidCssEntries} />
      {invalidCssEntries.length <= 0 && (
        <PreviewArea
          validCssEntries={validCssEntries}
          readyToUse={readyToUse}
        />
      )}
    </Column>
  );
};
