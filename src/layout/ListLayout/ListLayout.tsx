import { ReactNode } from "react";
import style from "./ListLayout.module.scss";
import SelectGroup from "@/components/SelectGroup/SelectGroup";

interface ListLayoutProps {
  children: ReactNode;
}

export default function ListLayout({ children }: ListLayoutProps) {
  return (
    <>
      <SelectGroup />
      <section className={style.section}>{children}</section>
    </>
  );
}
