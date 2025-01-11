import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
  color: white;
  background-color: #1a365d;

  &:hover {
    background-color: #2a4a7f;
  }
`;
