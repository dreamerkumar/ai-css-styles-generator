import React from "react";

interface ErrorDisplayProps {
  error: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error || error.length === 0) return null;

  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `start`,
        alignItems: `center`,
        maxHeight: `800px`,
        width: `100%`,
        backgroundColor: `var(--sl-color-neutral-50)`,
        fontFamily: `var(--sl-font-mono)`,
        fontSize: `var(--sl-font-size-small)`,
        whiteSpace: `pre-wrap`,
        overflow: `auto`,
        color: `var(--sl-color-danger-600)`,
      }}
    >
      <code>
        {`There was an error generating the CSS: \n\n`}
        {error}
      </code>
    </div>
  );
};
