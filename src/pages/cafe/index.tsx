import { ReactElement } from "react";
import CustomHead from "@/components/CustomHead";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";

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
