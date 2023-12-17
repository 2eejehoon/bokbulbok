import { ReactNode } from "react";
import styled from "styled-components";
import GobackButton from "@/components/GobackButton/GobackButton";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: white;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
