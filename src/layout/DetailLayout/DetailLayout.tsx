import { ReactNode, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "./DetailLayout.module.scss";
import Button from "@/components/common/Button/Button";
import usePreviousPath from "@/hooks/usePreviousPath";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  const router = useRouter();
  const prevPath = usePreviousPath();

  const handleGoBackClick = useCallback(() => {
    router.back();
  }, []);

  useEffect(() => {
    if (prevPath) router.prefetch(prevPath);
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
