import { ReactNode } from "react";
import style from "./NestedLayout.module.scss";
import SelectGroup from "@/components/SelectGroup/SelectGroup";

interface NestedLayoutProps {
  children: ReactNode;
}

export default function NestedLayout({ children }: NestedLayoutProps) {
  return (
    <>
      <SelectGroup />
      <section className={style.section}>{children}</section>
    </>
  );
}
