import Link from "next/link";
import { ReactNode } from "react";
import style from "./NavLayout.module.scss";

interface NavLayoutProps {
  children: ReactNode;
}

export default function NavLayout({ children }: NavLayoutProps) {
  const categories = [
    { name: "식당", path: "/restaurant" },
    { name: "카페", path: "/cafe" },
    { name: "놀거리", path: "/play" },
  ] as const;

  return (
    <>
      <nav className={style.nav}>
        <ul className={style.ul}>
          {categories.map((category) => {
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
