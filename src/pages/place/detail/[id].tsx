import { QueryClient, dehydrate } from "@tanstack/react-query";
import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { getPlaceData } from "../../api/place";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import { QUERY_KEY } from "@/contant";

export default function PlaceDetail() {
  return <></>;
}

PlaceDetail.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const id = context.query.id;

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.PLACE],
    queryFn: ({ pageParam = 1 }) => getPlaceData(pageParam),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
