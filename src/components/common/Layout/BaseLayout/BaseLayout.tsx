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
        <Link href={"/"}>홈</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>
        <RouletteModal />
      </footer>
    </>
  );
}
