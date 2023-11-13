import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getPlacelistData } from "@/api/place";
import { QUERY_KEY } from "@/contant";
import { isLocationQuery } from "@/types/query";
import ListLayout from "@/layout/ListLayout/ListLayout";
import PlaceList from "@/components/PlaceList/PlaceList";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Seo from "@/components/Seo/Seo";
import useGetPlaceInfiniteData from "@/hooks/useGetPlaceInfiniteData";
import Loading from "@/components/Loading/Loading";

export default function Place() {
  const { data, hasNextPage, fetchNextPage, isFetching } =
    useGetPlaceInfiniteData();
  const targetRef = useInfiniteScroll({ hasNextPage, fetchNextPage });

  return (
    <>
      <Seo title={"복불복"} description={"주변 음식점 리스트"} />
      <PlaceList data={data} />
      <div ref={targetRef}>{isFetching && <Loading height={30} />}</div>
    </>
  );
}

Place.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.PLACELIST],
    queryFn: ({ pageParam = 1 }) => {
      if (isLocationQuery(context.query)) {
        const { lng, lat, range, sort } = context.query;
        return getPlacelistData(pageParam, lng, lat, range, sort);
      }
    },
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
