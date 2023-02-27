import { ReactElement } from "react";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";

export default function Home() {
  return <></>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};
