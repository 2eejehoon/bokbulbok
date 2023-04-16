import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getPlacelistData } from "@/api/place";
import { QUERY_KEY } from "@/contant";
import ListLayout from "@/layout/ListLayout/ListLayout";
import PlaceList from "@/components/PlaceList/PlaceList";
import { QueryType } from "@/types/query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Seo from "@/components/common/Seo/Seo";
import useGetPlaceInfiniteData from "@/hooks/useGetPlaceInfiniteData";

export default function Place() {
  const { data, hasNextPage, fetchNextPage } = useGetPlaceInfiniteData();
  const targetRef = useInfiniteScroll({ hasNextPage, fetchNextPage });

  return (
    <>
      <Seo title={"복불복"} description={"주변 음식점 리스트"} />
      <PlaceList data={data} />
      <div ref={targetRef} />
    </>
  );
}

Place.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const { lng, lat, range, sort } = context.query as QueryType;

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.PLACELIST],
    queryFn: ({ pageParam = 1 }) => getPlacelistData(pageParam, lng, lat, range, sort),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
