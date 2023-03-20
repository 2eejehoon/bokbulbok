import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getPlaceData } from "../api/place";
import { QUERY_KEY } from "@/contant";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import NestedLayout from "@/layout/ListLayout/ListLayout";
import PlaceList from "@/components/PlaceList/PlaceList";

export default function Place() {
  return <PlaceList />;
}

Place.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NestedLayout>{page}</NestedLayout>
    </BaseLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const { lng, lat, range, sort } = context.query;

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.PLACELIST],
    queryFn: ({ pageParam = 1 }) =>
      getPlaceData(pageParam, Number(lng), Number(lat), Number(range), String(sort)),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
