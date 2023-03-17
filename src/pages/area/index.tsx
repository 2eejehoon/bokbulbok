import { ReactElement } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import NavLayout from "@/layout/NavLayout/NavLayout";
import { QUERY_KEY } from "@/contant";
import AreaPlaceList from "@/components/area/AreaPlaceList/AreaPlaceList";
import { getDataByArea } from "@/pages/api/place";
import AreaSelectGroup from "@/components/area/AreaSelectGroup/AreaSelectGroup";

export default function Area() {
  return (
    <>
      <AreaSelectGroup />
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

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.AREA],
    queryFn: ({ pageParam = 1 }) => getDataByArea(pageParam),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
