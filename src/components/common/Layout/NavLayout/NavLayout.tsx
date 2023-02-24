import style from "./NavLayout.module.scss";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLayoutProps {
  children: ReactNode;
}

export default function NavLayout({ children }: NavLayoutProps) {
  return (
    <>
      <nav className={style.nav}>
        <ul className={style.ul}>
          {[
            { name: "식당", path: "/foods" },
            { name: "카페", path: "/drinks" },
            { name: "놀거리", path: "/plays" },
          ].map((category) => {
            return (
              <li key={category.name} className={style.li}>
                <Link href={category.path}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <section className={style.section}>{children}</section>
    </>
  );
}
