import { ReactNode } from "react";
import styled from "styled-components";
import SortSelectModal from "@/components/SortSelect/SortSelectModal";
import RouletteModal from "@/components/RouletteModal/RouletteModal";
import RangeSliderPopover from "@/components/RangeSliderPopover/RangeSliderPopover";
import Header from "@/components/Header/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

interface ListLayoutProps {
  children: ReactNode;
}

export default function ListLayout({ children }: ListLayoutProps) {
  return (
    <>
      <Header>
        <Header.Left>
          <RangeSliderPopover />
          <SortSelectModal />
        </Header.Left>
        <Header.Right>
          <RouletteModal />
        </Header.Right>
      </Header>
      <Main>{children}</Main>
      <ScrollToTopButton />
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 50px);
`;
