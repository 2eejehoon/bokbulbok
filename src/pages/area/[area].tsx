import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/contant";
import { getAreaBasedPlaceListData } from "@/api/area";
import { isAreaQuery } from "@/utils/area";
import Seo from "@/components/Common/Seo";
import ListLayout from "@/layout/ListLayout/ListLayout";
import AreaPageHeader from "@/components/Area/AreaPageHeader";
import AreaPlaceList from "@/components/Area/AreaPlaceLIst";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.AREA_LIST],
    queryFn: ({ pageParam = 1 }) => {
      if (isAreaQuery(context.query)) {
        const { areaCode, sort } = context.query;
        return getAreaBasedPlaceListData(pageParam, areaCode, sort);
      }
    },
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default function Area() {
  return (
    <>
      <Seo title="복불복" description="지역별 음식점 정보" />
      <AreaPageHeader />
      <AreaPlaceList />
    </>
  );
}

Area.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>;
};
