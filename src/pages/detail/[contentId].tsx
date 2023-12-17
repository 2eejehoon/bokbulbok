import { QueryClient, dehydrate } from "@tanstack/react-query";
import { type ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import PlaceInfo from "@/components/PlaceInfo/PlaceInfo";
import {
  getPlaceCommonDataById,
  getPlaceIntroDataById,
  getPlaceImageDataById,
} from "@/api/detail";
import { QUERY_KEY } from "@/contant";
import DetailLayout from "@/layout/DetailLayout/DetailLayout";
import Map from "@/components/Map/Map";
import Seo from "@/components/Seo/Seo";
import useGetPlaceDetailData from "@/react-query/query/useGetPlaceDetailData";
import ImageCarousel from "@/components/PlaceImageCarousel/PlaceImageCarousel";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const contentId = context.query.contentId as string;

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.DETAIL_COMMON, contentId],
      queryFn: () => getPlaceCommonDataById(contentId),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.DETAIL_INTRO, contentId],
      queryFn: () => getPlaceIntroDataById(contentId),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.DETAIL_IMAGE, contentId],
      queryFn: () => getPlaceImageDataById(contentId),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

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
