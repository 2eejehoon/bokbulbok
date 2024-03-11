import { ReactNode } from "react";
import styled from "styled-components";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 355px;
  min-height: 100vh;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  background-color: white;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
