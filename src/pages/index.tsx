import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead";
import BaseLayout from "@/components/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/Layout/NavLayout/NavLayout";
import DistanceSlider from "@/molcules/DistanceSlider/DistanceSlider";

export default function Home() {
  return (
    <>
      <CustomHead title={"홈"} />
      <DistanceSlider />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};
