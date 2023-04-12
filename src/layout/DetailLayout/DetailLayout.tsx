import { ReactNode } from "react";
import style from "./DetailLayout.module.scss";
import GobackButton from "@/components/GobackButton/GobackButton";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  return (
    <>
      <header className={style.header}>
        <GobackButton />
      </header>
      <main className={style.main}>{children}</main>
    </>
  );
}
