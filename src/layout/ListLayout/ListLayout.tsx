import { ReactNode } from "react";
import style from "./ListLayout.module.scss";
import RangeSliderModal from "@/components/RangeSliderModal/RangeSliderModal";
import SortSelectModal from "@/components/SortSelectModal/SortSelectModal";
import RouletteModal from "@/components/RouletteModal/RouletteModal";

interface ListLayoutProps {
  children: ReactNode;
}

export default function ListLayout({ children }: ListLayoutProps) {
  return (
    <>
      <header className={style.header}>
        <div className={style.left}>
          <RangeSliderModal />
          <SortSelectModal />
        </div>
        <div className={style.right}>
          <RouletteModal />
        </div>
      </header>
      <section className={style.section}>{children}</section>
    </>
  );
}
