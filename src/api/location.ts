import HttpClient from "./axios";
import { PlaceData } from "@/types/place";
import { Response } from "@/types/response";

const SERVICE_KEY = process.env.NEXT_PUBLIC_API_KEY;

type PlaceDataResponse = Response<PlaceData[]>;

export const getLocationBasedPlacelistData = async (
  pageParam: number = 1,
  lng: string,
  lat: string,
  radius: string,
  arrange: string
): Promise<{
  placeList: PlaceData[];
  nextCursor: number;
  prevCursor: number;
}> => {
  try {
    const response = await HttpClient.get<PlaceDataResponse>(
      `locationBasedList1?serviceKey=${SERVICE_KEY}&numOfRows=30&pageNo=${pageParam}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=${arrange}&contentTypeId=39&mapX=${lng}&mapY=${lat}&radius=${radius}`
    );
    const { items, pageNo } = response.data.response.body;
    return {
      placeList: items.item,
      nextCursor: pageNo + 1,
      prevCursor: pageNo - 1,
    };
  } catch (error) {
    throw new Error();
  }
};
