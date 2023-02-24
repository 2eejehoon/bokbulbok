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
        <Link href={"/"}>로고</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>돌림판 버튼</footer>
    </>
  );
}
