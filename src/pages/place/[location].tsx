import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPlacelistData } from "@/api/place";
import { QUERY_KEY } from "@/contant";
import ListLayout from "@/layout/ListLayout/ListLayout";
import PlaceList from "@/components/PlaceList/PlaceList";
import { QueryType } from "@/types/query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function Place() {
  const targetRef = useRef(null);
  const router = useRouter();
  const { lng, lat, range, sort } = router.query as QueryType;

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.PLACELIST],
    queryFn: ({ pageParam = 1 }) => getPlacelistData(pageParam, lng, lat, range, sort),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  useInfiniteScroll({ targetRef, hasNextPage, fetchNextPage });

  return (
    <>
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
