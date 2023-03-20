import axios from "axios";
import { PlaceDataType } from "../../type/place";

const key = process.env.NEXT_PUBLIC_API_KEY;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const AxiosInstance = axios.create({
  baseURL,
});

export const getPlaceData = async (
  pageParam: number,
  lng?: number,
  lat?: number,
  radius?: number,
  arrange?: string
): Promise<{
  placeList: PlaceDataType[];
  nextCursor: number;
  prevCursor: number;
}> => {
  const response = await AxiosInstance.get(
    `locationBasedList1?serviceKey=${key}&numOfRows=30&pageNo=${pageParam}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=${arrange}&contentTypeId=39&mapX=${lng}&mapY=${lat}&radius=${radius}`
  );

  const { items, pageNo } = await response.data.response.body;

  return {
    placeList: items.item,
    nextCursor: pageNo + 1,
    prevCursor: pageNo - 1,
  };
};

export const getPlaceCommonDataById = async (contentId: number) => {
  const response = await AxiosInstance.get(
    `detailCommon1?ServiceKey=${key}&contentTypeId=12&contentId=${contentId}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`
  );

  const data = await response.data.response.body;

  return data;
};

export const getPlaceIntroDataById = async (id: string) => {
  const response = await AxiosInstance.get(
    `detailIntro1?ServiceKey=${key}&contentTypeId=39&contentId=${id}&MobileOS=ETC&MobileApp=AppTest&_type=json`
  );

  const data = await response.data;

  return data;
};
