import styled from "styled-components";

export const StyledButton = styled.button<{ disabled?: boolean }>`
  width: fit-content;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
  background-color: var(--ai-color-primary-600);
  color: white;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: var(--ai-color-primary-700);
  }

  &:active:not(:disabled) {
    background-color: var(--ai-color-primary-800);
  }
`;
