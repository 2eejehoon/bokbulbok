import { ReactNode } from "react";
import style from "./DetailLayout.module.scss";
import GoBackButton from "@/components/GoBackButton/GoBackButton";
import AddRouletteButton from "@/components/RouletteAddButton/AddRouletteButton";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  return (
    <>
      <header className={style.header}>
        <GoBackButton />
        <AddRouletteButton />
      </header>
      <main className={style.main}>{children}</main>
    </>
  );
}
