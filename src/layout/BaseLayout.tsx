import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Main>{children}</Main>
      <Footer>
        <Link href={"https://api.visitkorea.or.kr/#/"} target={"_blank"}>
          <Text>데이터 제공 : 한국관광공사</Text>
        </Link>
      </Footer>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 25px);
  background-color: white;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 25px;
  background-color: white;
`;

const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 12px;
  font-weight: 600;
`;
