import { ReactNode } from "react";
import Link from "next/link";
import style from "./BaseLayout.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <header className={style.header}>
        <Link href={"/"}>
          <span className={style.logo}>복불복</span>
        </Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>
        <Link href={"https://api.visitkorea.or.kr/#/"} target="_blank">
          <span className={style.text}>데이터 제공 : 한국관광공사</span>
        </Link>
      </footer>
    </>
  );
}
