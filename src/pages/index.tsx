import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead/CustomHead";
import BaseLayout from "@/components/Layout/BaseLayout";
import MainPageLayout from "@/components/Layout/MainPageLayout";

export default function Home() {
  return (
    <>
      <CustomHead title={"음식점"} />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <MainPageLayout>{page}</MainPageLayout>
    </BaseLayout>
  );
};
