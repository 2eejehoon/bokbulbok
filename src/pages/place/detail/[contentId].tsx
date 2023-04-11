import { useRouter } from "next/router";
import { useQueries } from "@tanstack/react-query";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import PlaceInfo from "@/components/PlaceInfo/PlaceInfo";
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
import { PlaceImageDataType } from "@/types/place";
import Seo from "@/components/common/Seo/Seo";

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
        select: (data: PlaceImageDataType[]) => data.map((item) => item.originimgurl),
      },
    ],
  });

  console.log(common, intro, image);

  return (
    <>
      <Seo
        title={common.data?.title ?? ""}
        description={common.data?.overview.replaceAll("<br>", "") ?? ""}
        url={router.asPath}
        image={common.data?.firstimage ?? ""}
      />
      <Carousel images={image.data ?? []} />
      <PlaceInfo
        title={common.data?.title ?? ""}
        category={common.data?.cat3 ?? ""}
        address={common.data?.addr1 ?? ""}
        menu={intro.data?.treatmenu ?? ""}
        tel={intro.data?.infocenterfood ?? ""}
        businessday={intro.data?.restdatefood ?? ""}
        businesshour={intro.data?.opentimefood ?? ""}
        overview={common.data?.overview ?? ""}
      />
      <Map
        lng={common.data?.mapx ?? "126.969655"}
        lat={common.data?.mapy ?? "37.553760"}
      />
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
