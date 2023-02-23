import style from "./Layout.module.scss";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}

function Header() {
  return <header className={style.header}></header>;
}

function Footer() {
  return <footer className={style.footer}></footer>;
}
