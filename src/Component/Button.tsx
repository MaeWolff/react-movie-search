import React from "react";
import styled from "styled-components";

type ButtonProps = {
  secondary?: boolean;
};
const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  user-select: none;
  padding: 0.813em 0.625em;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  font-weight: bold;
  border-radius: 0.5em;
  transition: all 0.2s ease 0s;
  min-height: fit-content;
  border: 1px solid red;
  background-color: ${(props) => (props.secondary ? `transparent` : `red`)};
  color: ${(props) => (props.secondary ? `red` : `white`)};
  &:focus {
    outline: none;
  }
`;

type ButtonComponentProps = {
  label: string;
  handleClick?: () => void | Promise<void>;
  secondary?: boolean;
};

export default function ButtonComponent({
  label,
  secondary,

  handleClick,
}: ButtonComponentProps) {
  return (
    <Button secondary={secondary} onClick={handleClick}>
      {label}
    </Button>
  );
}
