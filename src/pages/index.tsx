import { ReactElement } from "react";
import Seo from "@/components/common/Seo";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import Home from "@/components/home/Home";

export default function Index() {
  return (
    <>
      <Seo title={"복불복"} description={"현재 위치 음식점 정보"} />
      <Home />
    </>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
