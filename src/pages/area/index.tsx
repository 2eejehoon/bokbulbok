import { ReactElement } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import { QUERY_KEY } from "@/contant";
import FunctionBar from "@/components/common/FunctionBar/FunctionBar";
import AreaPlaceList from "@/components/area/AreaPlaceList/AreaPlaceList";
import { getAreaData } from "@/pages/api/client";

export default function Area() {
  return (
    <>
      <FunctionBar />
      <AreaPlaceList />
    </>
  );
}

Area.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.AREA],
    queryFn: ({ pageParam = 1 }) => getAreaData(pageParam),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
