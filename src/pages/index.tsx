import { ReactElement } from "react";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import NavLayout from "@/layout/NestedLayout/NestedLayout";
import { useGeolocation } from "@/hooks/useGeolocation";

export default function Home() {
  const location = useGeolocation();

  console.log(location);
  return <></>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};
