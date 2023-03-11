import { ReactNode } from "react";
import Nav from "../../Nav/Nav";
import style from "./NavLayout.module.scss";

interface NavLayoutProps {
  children: ReactNode;
}

export default function NavLayout({ children }: NavLayoutProps) {
  const pages = [
    { name: "내 주변", path: "/location" },
    { name: "지역별", path: "/area" },
  ];

  return (
    <>
      <Nav pages={pages} />
      <section className={style.section}>{children}</section>
    </>
  );
}
