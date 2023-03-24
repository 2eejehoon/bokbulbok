import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { getPlaceCommonDataById } from "@/pages/api/place";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import { QUERY_KEY } from "@/contant";

export default function PlaceDetail() {
  const router = useRouter();
  const contentId = router.query.contentId;

  const { data } = useQuery({
    queryKey: [QUERY_KEY.PLACECOMMON, contentId],
    queryFn: () => getPlaceCommonDataById(String(contentId)),
  });

  console.log(data);

  return <></>;
}

PlaceDetail.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const contentId = context.query.contentId;

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.PLACECOMMON, contentId],
    queryFn: () => getPlaceCommonDataById(String(contentId)),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}