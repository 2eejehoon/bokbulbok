import { ReactNode } from "react";
import style from "./NestedLayout.module.scss";

interface NavLayoutProps {
  children: ReactNode;
}

export default function NavLayout({ children }: NavLayoutProps) {
  return (
    <>
      <div className={style.title}>현재 위치 : 서울시 중구</div>
      <section className={style.section}>{children}</section>
    </>
  );
}
