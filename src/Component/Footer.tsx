import React from 'react'
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 5em;
  color: #3e4247;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>Developped by Maeva WOLFF and Nathan STAMPFLI</p>
    </FooterContainer>
  )
}
