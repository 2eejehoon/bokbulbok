import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead/CustomHead";
import BaseLayout from "@/components/Layout/BaseLayout";
import MainPageLayout from "@/components/Layout/MainPageLayout";

export default function Plays() {
  return (
    <>
      <CustomHead title="놀거리" />
    </>
  );
}

Plays.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <MainPageLayout>{page}</MainPageLayout>
    </BaseLayout>
  );
};
