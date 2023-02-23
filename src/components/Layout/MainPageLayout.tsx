import style from "./MainPageLayout.module.scss";
import { ReactNode } from "react";

interface MainPageLayoutProps {
  children: ReactNode;
}

export default function MainPageLayout({ children }: MainPageLayoutProps) {
  return (
    <>
      <nav className={style.nav}>메인 페이지 내비게이션</nav>
      <main className={style.main}>{children}</main>
    </>
  );
}
