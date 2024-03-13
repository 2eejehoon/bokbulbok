import { ReactNode } from "react";
import styled from "styled-components";
import ScrollToTopButton from "@/components/Common/ScrollToTopButton";

interface ListLayoutProps {
  children: ReactNode;
}

export default function ListLayout({ children }: ListLayoutProps) {
  return (
    <>
      <Main>{children}</Main>
      <ScrollToTopButton />
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
