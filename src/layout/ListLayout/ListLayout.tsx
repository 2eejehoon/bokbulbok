import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import style from "./ListLayout.module.scss";
import { radiusState } from "@/recoil/range";
import { arrangeState } from "@/recoil/sort";
import SelectGroup from "@/components/SelectGroup/SelectGroup";
import { locationState } from "@/recoil/location";

interface ListLayoutProps {
  children: ReactNode;
}

export default function ListLayout({ children }: ListLayoutProps) {
  const router = useRouter();
  const { lng, lat } = useRecoilValue(locationState);
  const radius = useRecoilValue(radiusState);
  const arrange = useRecoilValue(arrangeState);

  useEffect(() => {
    if (lng && lat && radius && arrange) {
      router.push(`/place/location?lng=${lng}&lat=${lat}&range=${radius}&sort=${arrange}`);
    }
  }, [lng, lat, radius, arrange]);

  return (
    <>
      <SelectGroup />
      <section className={style.section}>{children}</section>
    </>
  );
}
