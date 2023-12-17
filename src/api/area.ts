import HttpClient from "./axios";
import { Response } from "@/types/response";
import { PlaceData } from "@/types/place";

const SERVICE_KEY = process.env.NEXT_PUBLIC_API_KEY;

type AreaBasedPlaceListDataResponse = Response<PlaceData[]>;

export const getAreaBasedPlaceListData = async (
  pageParam: number = 1,
  areaCode: string = "1",
  sort: string
) => {
  const response = await HttpClient.get<AreaBasedPlaceListDataResponse>(
    `areaBasedList1?serviceKey=${SERVICE_KEY}&pageNo=${pageParam}&numOfRows=30&MobileApp=AppTest&MobileOS=ETC&arrange=${sort}&areaCode=${areaCode}&_type=json&contentTypeId=39`
  );

  const { items, pageNo } = response.data.response.body;

  return {
    placeList: items.item,
    nextCursor: pageNo + 1,
    prevCursor: pageNo - 1,
  };
};
