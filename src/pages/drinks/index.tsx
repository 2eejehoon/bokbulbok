import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead";
import BaseLayout from "@/components/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/Layout/NavLayout/NavLayout";

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
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};
