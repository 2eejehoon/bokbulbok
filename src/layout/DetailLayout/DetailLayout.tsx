import { ReactNode, useCallback } from "react";
import { useRouter } from "next/router";
import style from "./DetailLayout.module.scss";
import Button from "@/components/common/Button/Button";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  const router = useRouter();

  const handleGoBackClick = useCallback(() => {
    router.back();
  }, []);

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
