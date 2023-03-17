import axios from "axios";
import { PlaceData } from "../../type/place";
import { Location } from "@/type/location";

const key = process.env.NEXT_PUBLIC_API_KEY;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

export const getPlaceData = async (
  pageParam: number,
  location?: Location,
  range?: number,
  sort?: string
): Promise<{
  placeList: PlaceData[];
  nextCursor: number;
  prevCursor: number;
}> => {
  const mapX = 126.981611;
  const mapY = 37.568477;
  const radius = 5000;
  const arrange = "B"; // 제목 A, 수정 B, 등록 C

  const response = await AxiosInstance.get(
    `B551011/KorService1/locationBasedList1?serviceKey=${key}&numOfRows=30&pageNo=${pageParam}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=${arrange}&contentTypeId=39&mapX=${mapX}&mapY=${mapY}&radius=${radius}`
  );

  const { items, pageNo } = await response.data.response.body;

  return {
    placeList: items.item,
    nextCursor: pageNo + 1,
    prevCursor: pageNo - 1,
  };
};
