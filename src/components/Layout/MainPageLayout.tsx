import style from "./MainPageLayout.module.scss";
import Link from "next/link";
import { ReactNode } from "react";

interface MainPageLayoutProps {
  children: ReactNode;
}

export default function MainPageLayout({ children }: MainPageLayoutProps) {
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
      <main className={style.main}>{children}</main>
    </>
  );
}
