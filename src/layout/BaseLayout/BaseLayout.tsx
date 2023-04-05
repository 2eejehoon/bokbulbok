import { ReactNode } from "react";
import Link from "next/link";
import style from "./BaseLayout.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <div className={style.main}>{children}</div>
      <footer className={style.footer}>
        <Link href="https://api.visitkorea.or.kr/#/" target="_blank">
          <span className={style.text}>데이터 제공 : 한국관광공사</span>
        </Link>
      </footer>
    </>
  );
}
