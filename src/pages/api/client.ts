import axios from "axios";
import { PlaceData } from "../../type";

const key = process.env.NEXT_PUBLIC_API_KEY;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({
  baseURL,
  timeout: 5000,
});

export const getLocationData = async (
  pageParam: number
): Promise<{
  placeList: PlaceData[];
  nextCursor: number;
  prevCursor: number;
}> => {
  const response = await instance.get(
    `B551011/KorService1/locationBasedList1?serviceKey=${key}&numOfRows=10&pageNo=${pageParam}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=${126.981611}&mapY=${37.568477}&radius=${1000}&contentTypeId=39`
  );

  const { items, pageNo } = await response.data.response.body;

  return {
    placeList: items.item,
    nextCursor: pageNo + 1,
    prevCursor: pageNo - 1,
  };
};

export const getAreaData = async (
  pageParam: number
): Promise<{
  placeList: PlaceData[];
  nextCursor: number;
  prevCursor: number;
}> => {
  const response = await instance.get(
    `B551011/KorService/areaBasedList?numOfRows=10&pageNo=${pageParam}&MobileOS=ETC&MobileApp=AppTest&serviceKey=${key}&listYN=Y&arrange=A&contentTypeId=39&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&_type=json`
  );

  const { items, pageNo } = await response.data.response.body;

  return {
    placeList: items.item,
    nextCursor: pageNo + 1,
    prevCursor: pageNo - 1,
  };
};
