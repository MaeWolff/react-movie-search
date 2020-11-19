import React from "react";
import styled from "styled-components";
import debounce from 'debounce'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const InputStyled = styled.input`
  margin: 1em 0 2em 0;
  border: 1px solid #bfbebe;
  background-color: #3f3c44;
  border: none;
  padding: 0.5em 1em;
  border-radius: 4px;
  min-height: 2em;
  color: ${(props) => props.theme.colors.white};
  width: 100%;

  &:focus,
  &:active {
    outline: none;
  }

  ::placeholder {
    opacity: 0.8;
  }
`;

type InputMoleculeProps = {
  label?: string;
  type: string;
  placeholder?: string;
  id: string;
  className?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputMolecule({
  label,
  type,
  placeholder,
  handleChange,
  className,
  id,
}: InputMoleculeProps) {
  return (
    <InputWrapper className={className}>
      <label htmlFor={id}>{label}</label>

      <InputStyled
        type={type}
        id={id}
        required
        name={id}
        placeholder={placeholder}
        onChange={debounce(handleChange, 1000)}
      ></InputStyled>
    </InputWrapper>
  );
}
