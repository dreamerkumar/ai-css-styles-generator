import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
  color: white;
  background-color: #1a365d;
  width: fit-content;

  &:hover {
    background-color: #2a4a7f;
  }
`;
