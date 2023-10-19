import { ReactNode } from "react";
import styled from "styled-components";
import GobackButton from "@/components/GobackButton/GobackButton";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  return (
    <>
      <Header>
        <GobackButton />
      </Header>
      <Main>{children}</Main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px;
  border-bottom: 1px lightgrey solid;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100% - 50px);
  background-color: white;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
