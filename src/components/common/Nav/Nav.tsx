import Link from "next/link";
import style from "./Nav.module.scss";

interface NavProps {
  pages: { name: string; path: string }[];
}

export default function Nav({ pages }: NavProps) {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        {pages.map((page) => {
          return (
            <Link key={page.name} href={page.path}>
              <li className={style.li}>{page.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
