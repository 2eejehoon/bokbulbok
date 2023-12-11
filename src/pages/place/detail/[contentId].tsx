import { QueryClient, dehydrate } from "@tanstack/react-query";
import { type ReactElement } from "react";
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
import Seo from "@/components/Seo/Seo";
import useGetPlaceDetailData from "@/hooks/useGetPlaceDetailData";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

export default function PlaceDetail() {
  const [common, intro, image] = useGetPlaceDetailData();

  return (
    <>
      <Seo
        title={common.data?.title}
        description={common.data?.overview}
        image={common.data?.firstimage}
      />
      <ImageCarousel images={image.data} />
      <PlaceInfo
        title={common.data?.title}
        category={common.data?.cat3}
        address={common.data?.addr1}
        menu={intro.data?.treatmenu}
        tel={intro.data?.infocenterfood}
        businessday={intro.data?.restdatefood}
        businesshour={intro.data?.opentimefood}
        overview={common.data?.overview}
      />
      <Map
        lng={Number(common.data?.mapx) ?? 126.969655}
        lat={Number(common.data?.mapy) ?? 37.55376}
      />
    </>
  );
}

PlaceDetail.getLayout = function getLayout(page: ReactElement) {
  return <DetailLayout>{page}</DetailLayout>;
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
