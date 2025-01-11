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
        maxWidth: `450px`,
        backgroundColor: `var(--ai-color-neutral-50)`,
        fontFamily: `var(--ai-font-mono)`,
        whiteSpace: `pre-wrap`,
        overflow: `auto`,
      }}
    >
      <code>
        {`There was an error generating the CSS: \n\n`}
        {error}
      </code>
    </div>
  );
};
