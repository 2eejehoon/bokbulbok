import { ReactElement } from "react";
import Button from "@/components/Button/Button";
import CustomHead from "@/components/CustomHead";
import BaseLayout from "@/components/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/Layout/NavLayout/NavLayout";

export default function Foods() {
  return (
    <>
      <CustomHead title="식당" />
      {/* <Button type="button" color="black" size="small" onClick={}>
        거리
      </Button> */}
    </>
  );
}

Foods.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};
