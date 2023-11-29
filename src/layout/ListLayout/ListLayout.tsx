import { ReactNode } from "react";
import styled from "styled-components";
import RangeSliderModal from "@/components/RangeSliderModal/RangeSliderModal";
import SortSelectModal from "@/components/SortSelect/SortSelectModal";
import RouletteModal from "@/components/RouletteModal/RouletteModal";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

interface ListLayoutProps {
  children: ReactNode;
}

export default function ListLayout({ children }: ListLayoutProps) {
  return (
    <>
      <Header>
        <Left>
          <RangeSliderModal />
          <SortSelectModal />
        </Left>
        <Right>
          <RouletteModal />
        </Right>
      </Header>
      <Main>{children}</Main>
      <ButtonContainer>
        <ScrollToTopButton />
      </ButtonContainer>
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

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 50px);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;
