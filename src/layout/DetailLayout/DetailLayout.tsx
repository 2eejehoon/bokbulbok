import { ReactNode } from "react";
import style from "./DetailLayout.module.scss";
import GoBackButton from "@/components/GoBackButton/GoBackButton";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  return (
    <>
      <header className={style.header}>
        <GoBackButton />
      </header>
      <main className={style.main}>{children}</main>
    </>
  );
}
