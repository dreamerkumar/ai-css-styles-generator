import React from "react";

interface InvalidCssDisplayProps {
  invalidCssEntries: string[];
}

export const InvalidCssDisplay: React.FC<InvalidCssDisplayProps> = ({
  invalidCssEntries,
}) => {
  if (!invalidCssEntries.length) return null;

  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `start`,
        alignItems: `center`,
        maxHeight: `800px`,
        width: `100%`,
        backgroundColor: `var(--ai-color-primary-100)`,
        padding: `var(--ai-spacing-small)`,
        borderRadius: `var(--ai-border-radius-medium)`,
        whiteSpace: `pre-wrap`,
        overflow: `auto`,
        color: `var(--ai-color-danger-600)`,
      }}
    >
      <code>
        {`The CSS entry failed validation and cannot be applied due to the following error(s): \n\n`}
        {invalidCssEntries.map((entry) => (
          <React.Fragment key={entry}>{`${entry}\n`}</React.Fragment>
        ))}
      </code>
    </div>
  );
};
