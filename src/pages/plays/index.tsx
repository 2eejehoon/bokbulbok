import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead";
import BaseLayout from "@/components/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/Layout/NavLayout/NavLayout";
import DistanceSlider from "@/molcules/RangeSlider/RangeSlider";

export default function Plays() {
  return (
    <>
      <CustomHead title="놀거리" />
      <DistanceSlider />
    </>
  );
}

Plays.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};
