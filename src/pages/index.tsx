import { ReactElement } from "react";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import NavLayout from "@/layout/NavLayout/NavLayout";

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
