import { ReactNode } from "react";
import style from "./DetailLayout.module.scss";
import usePreviousPath from "@/hooks/usePreviousPath";
import Button from "@/components/common/Button/Button";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  const { handleGoBackClick } = usePreviousPath();

  return (
    <>
      <header className={style.header}>
        <Button type={"button"} onClick={handleGoBackClick} color={"grey"} size={"small"}>
          뒤로가기
        </Button>
      </header>
      <main className={style.main}>{children}</main>
    </>
  );
}
