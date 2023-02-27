import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import FilterSortBar from "@/components/restaurant/FilterSortBar/FilterSortBar";

export default function Restaurant() {
  return (
    <>
      <CustomHead title="식당" />
      <FilterSortBar />
    </>
  );
}

Restaurant.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};
