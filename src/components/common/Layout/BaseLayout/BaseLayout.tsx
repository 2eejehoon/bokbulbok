import { ReactNode } from "react";
import Link from "next/link";
import RouletteModal from "../../RouletteModal/RouletteModal";
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
        <Link href={"https://github.com/2eejehoon/bokbulbok"} target="_blank">
          <span className={style.text}>깃허브</span>
        </Link>
        <Link href={"https://velog.io/@2jehoon"} target="_blank">
          <span className={style.text}>블로그</span>
        </Link>
      </footer>
    </>
  );
}
