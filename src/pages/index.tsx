import { ReactElement } from "react";
import Seo from "@/components/Seo/Seo";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import ServiceIntro from "@/components/ServiceIntro/ServiceIntro";
import ServiceStartButton from "@/components/ServiceStartButton/ServiceStartButton";

export default function Home() {
  return (
    <>
      <Seo title={"복불복"} description={"현재 위치 음식점 정보"} />
      <ServiceIntro />
      <ServiceStartButton />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
