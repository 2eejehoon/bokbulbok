import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead/CustomHead";
import BaseLayout from "@/components/Layout/BaseLayout";
import MainPageLayout from "@/components/Layout/MainPageLayout";

export default function Drinks() {
  return (
    <>
      <CustomHead title="카페" />
    </>
  );
}

Drinks.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <MainPageLayout>{page}</MainPageLayout>
    </BaseLayout>
  );
};
