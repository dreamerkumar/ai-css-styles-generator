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
  gap: var(--sl-spacing-small);
  padding: var(--sl-spacing-medium);
  border: 1px solid var(--sl-color-neutral-300);
  border-radius: var(--sl-border-radius-medium);
`;

interface ValidationResultProps {
  validCssEntries: string[];
  invalidCssEntries: string[];
  readyToSave: boolean;
}

export const ValidationResult: React.FC<ValidationResultProps> = ({
  validCssEntries,
  invalidCssEntries,
  readyToSave,
}) => {
  return (
    <Column>
      <InvalidCssDisplay invalidCssEntries={invalidCssEntries} />
      {invalidCssEntries.length <= 0 && (
        <PreviewArea
          validCssEntries={validCssEntries}
          readyToSave={readyToSave}
        />
      )}
    </Column>
  );
};
