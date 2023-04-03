import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { getPlaceCommonDataById } from "@/pages/api/place";
import { QUERY_KEY } from "@/contant";
import DetailLayout from "@/layout/DetailLayout/DetailLayout";

export default function PlaceDetail() {
  const router = useRouter();
  const contentId = router.query.contentId;

  const { data } = useQuery({
    queryKey: [QUERY_KEY.PLACECOMMON, contentId],
    queryFn: () => getPlaceCommonDataById(String(contentId)),
  });

  return <></>;
}

PlaceDetail.getLayout = function getLayout(page: ReactElement) {
  return <DetailLayout>{page}</DetailLayout>;
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
