import { useRouter } from "next/router";
import { ReactNode } from "react";
import Nav from "../../Nav/Nav";
import style from "./NavLayout.module.scss";

interface NavLayoutProps {
  children: ReactNode;
}

export default function NavLayout({ children }: NavLayoutProps) {
  const pages = [
    { name: "식당", path: "/restaurant" },
    { name: "카페", path: "/cafe" },
    { name: "놀거리", path: "/play" },
  ];

  return (
    <>
      <Nav pages={pages} />
      <section className={style.section}>{children}</section>
    </>
  );
}
