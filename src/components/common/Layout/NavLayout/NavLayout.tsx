import { ReactNode } from "react";
import Nav from "../../Nav/Nav";
import style from "./NavLayout.module.scss";

interface NavLayoutProps {
  children: ReactNode;
}

export default function NavLayout({ children }: NavLayoutProps) {
  const pages = [
    { name: "음식", path: "/restaurant" },
    { name: "쇼핑", path: "/shop" },
    { name: "놀거리", path: "/play" },
  ];

  return (
    <>
      <Nav pages={pages} />
      <section className={style.section}>{children}</section>
    </>
  );
}
