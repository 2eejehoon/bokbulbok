import { useRouter } from "next/router";
import { useQueries } from "@tanstack/react-query";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import {
  getPlaceCommonDataById,
  getPlaceIntroDataById,
  getPlaceImageDataById,
} from "@/api/place";
import { QUERY_KEY } from "@/contant";
import DetailLayout from "@/layout/DetailLayout/DetailLayout";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import Map from "@/components/Map/Map";
import Carousel from "@/components/Carousel/Carousel";

export default function PlaceDetail() {
  const router = useRouter();
  const contentId = router.query.contentId as string;

  const [common, intro, image] = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEY.PLACECOMMON, contentId],
        queryFn: () => getPlaceCommonDataById(contentId),
      },
      {
        queryKey: [QUERY_KEY.PLACEINTRO, contentId],
        queryFn: () => getPlaceIntroDataById(contentId),
      },
      {
        queryKey: [QUERY_KEY.PLACEIMAGE, contentId],
        queryFn: () => getPlaceImageDataById(contentId),
      },
    ],
  });

  console.log("common", common);
  console.log("intro", intro);
  console.log("image", image);
  const images = image.data?.item.map((item) => item.originimgurl);

  return (
    <>
      <Carousel images={images} />
      <Map lng={common.data?.mapx} lat={common.data?.mapy} />
    </>
  );
}

PlaceDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <DetailLayout>{page}</DetailLayout>
    </BaseLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const contentId = context.query.contentId as string;

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.PLACECOMMON, contentId],
      queryFn: () => getPlaceCommonDataById(contentId),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.PLACEINTRO, contentId],
      queryFn: () => getPlaceIntroDataById(contentId),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.PLACEIMAGE, contentId],
      queryFn: () => getPlaceImageDataById(contentId),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
