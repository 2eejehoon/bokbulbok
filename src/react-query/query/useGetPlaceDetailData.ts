import { useRouter } from "next/router";
import { useQueries } from "@tanstack/react-query";
import { UseQueryResult } from "@tanstack/react-query";
import { QUERY_KEY } from "@/contant";
import { getPlaceCommonDataById, getPlaceIntroDataById, getPlaceImageDataById } from "@/api/detail";
import { PlaceImageData, PlaceCommonData, PlaceIntroData } from "@/types/place";

type useGetPlaceDetailDataReturnType = [
  common: UseQueryResult<PlaceCommonData>,
  intro: UseQueryResult<PlaceIntroData>,
  image: UseQueryResult<string[]>
];

export default function useGetPlaceDetailData(): useGetPlaceDetailDataReturnType {
  const router = useRouter();
  const contentId = router.query.contentId as string;

  return useQueries({
    queries: [
      {
        queryKey: [QUERY_KEY.DETAIL_COMMON, contentId],
        queryFn: () => getPlaceCommonDataById(contentId),
      },
      {
        queryKey: [QUERY_KEY.DETAIL_INTRO, contentId],
        queryFn: () => getPlaceIntroDataById(contentId),
      },
      {
        queryKey: [QUERY_KEY.DETAIL_IMAGE, contentId],
        queryFn: () => getPlaceImageDataById(contentId),
        select: (data: PlaceImageData[]) => data.map((item) => item.originimgurl),
      },
    ],
  });
}
