import React, { ReactNode } from "react";
import styled from "styled-components";

import { Header } from "../Component/index";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <LayoutContainer>
      <Header />

      <main>{children}</main>
    </LayoutContainer>
  );
}
