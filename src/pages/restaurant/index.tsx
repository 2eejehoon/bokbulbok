import { ReactElement } from "react";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import List from "@/components/common/List/List";
import FunctionBar from "@/components/restaurant/FunctionBar/FunctionBar";

export default function Restaurant() {
  return (
    <>
      <FunctionBar />
      <List />
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
