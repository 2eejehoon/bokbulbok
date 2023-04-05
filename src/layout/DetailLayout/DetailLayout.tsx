import { ReactNode } from "react";
import { useRouter } from "next/router";
import style from "./DetailLayout.module.scss";
import GoBackButton from "@/components/GoBackButton/GoBackButton";
import AddRouletteButton from "@/components/RouletteButton/RouletteButton";

interface DetailLayoutProps {
  children: ReactNode;
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  const route = useRouter();
  const contentId = route.query.contentId as string;

  return (
    <>
      <header className={style.header}>
        <GoBackButton />
        <AddRouletteButton contentId={contentId} />
      </header>
      <main className={style.main}>{children}</main>
    </>
  );
}
