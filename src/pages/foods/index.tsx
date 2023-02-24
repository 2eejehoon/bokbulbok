import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import RangeSlider from "@/components/common/RangeSlider/RangeSlider";

export default function Foods() {
  return (
    <>
      <CustomHead title="식당" />
      <RangeSlider />
    </>
  );
}

Foods.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};
