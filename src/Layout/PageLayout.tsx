import React, { ReactNode } from "react";
import styled from "styled-components";

import { Header } from "../Component/index";

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <LayoutContainer className={className}>
      <Header />

      <Main>{children}</Main>
    </LayoutContainer>
  );
}
