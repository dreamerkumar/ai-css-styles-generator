export const textAreaContainerStyles = {
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  maxHeight: `800px`,
  maxWidth: `600px`,
  width: `600px`,
  overflow: `auto`,
} as const;

export const textAreaStyles = {
  width: `100%`,
  padding: `12px`,
  fontSize: `var(--ai-font-size-medium)`,
  fontFamily: `monospace`,
  lineHeight: `1.5`,
  border: `1px solid #ccc`,
  borderRadius: `6px`,
  resize: `vertical` as const,
  backgroundColor: `var(--ai-color-primary-900)`,
  color: `var(--ai-color-primary-100)`,
  outline: `none`,
  transition: `border-color 0.2s, box-shadow 0.2s`,
} as const;
