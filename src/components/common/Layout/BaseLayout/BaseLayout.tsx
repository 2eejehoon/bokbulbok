import { ReactNode } from "react";
import Link from "next/link";
import style from "./BaseLayout.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const links = {
    home: { name: "홈", link: "/" },
    github: { name: "깃허브", link: "https://github.com/2eejehoon/bokbulbok" },
    blog: { name: "블로그", link: "https://velog.io/@2jehoon" },
  } as const;

  return (
    <>
      <header className={style.header}>
        <Link href={links.home.link}>{links.home.name}</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>
        <Link href={links.github.link} target="_blank">
          {links.github.name}
        </Link>
        <Link href={links.blog.link} target="_blank">
          {links.blog.name}
        </Link>
      </footer>
    </>
  );
}
