import { useRouter } from "next/router";
import { useQueries } from "@tanstack/react-query";
import { UseQueryResult } from "@tanstack/react-query";
import { QUERY_KEY } from "@/contant";
import {
  getPlaceCommonDataById,
  getPlaceIntroDataById,
  getPlaceImageDataById,
} from "@/api/place";
import { PlaceImageData, PlaceCommonData, PlaceIntroData } from "@/types/place";

type useGetPlaceDetailDataReturnType = [
  common: UseQueryResult<PlaceCommonData>,
  intro: UseQueryResult<PlaceIntroData>,
  image: UseQueryResult<string[]>
];

export default function useGetPlaceDetailData(): useGetPlaceDetailDataReturnType {
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
        select: (data: PlaceImageData[]) =>
          data.map((item) => item.originimgurl),
      },
    ],
  });

  return [common, intro, image];
}
