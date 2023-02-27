import { ReactElement } from "react";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import List from "@/components/common/List/List";
import FunctionBar from "@/components/restaurant/FunctionBar/FunctionBar";

export default function Restaurant() {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <>
      <FunctionBar />
      <List data={data} />
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
