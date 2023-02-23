import style from "./BaseLayout.module.scss";
import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <header className={style.header}>공통 헤더</header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>공통 푸터</footer>
    </>
  );
}
