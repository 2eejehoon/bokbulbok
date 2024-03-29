import HttpClient from "./axios";
import { PlaceCommonData, PlaceImageData, PlaceIntroData } from "@/types/place";
import { Response } from "@/types/response";

const SERVICE_KEY = process.env.NEXT_PUBLIC_API_KEY;

type PlaceCommonDataResponse = Response<PlaceCommonData[]>;

export const getPlaceCommonDataById = async (
  contentId: string
): Promise<PlaceCommonData> => {
  try {
    const response = await HttpClient.get<PlaceCommonDataResponse>(
      `detailCommon1?ServiceKey=${SERVICE_KEY}&_type=json&contentTypeId=39&contentId=${contentId}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`
    );

    return response.data.response.body.items.item[0];
  } catch (error) {
    throw new Error();
  }
};

type PlaceIntroDataResponse = Response<PlaceIntroData[]>;

export const getPlaceIntroDataById = async (
  contentId: string
): Promise<PlaceIntroData> => {
  try {
    const response = await HttpClient.get<PlaceIntroDataResponse>(
      `detailIntro1?ServiceKey=${SERVICE_KEY}&_type=json&contentTypeId=39&contentId=${contentId}&MobileOS=ETC&MobileApp=AppTest`
    );

    return response.data.response.body.items.item[0];
  } catch (error) {
    throw new Error();
  }
};

type PlaceImageDataResponse = Response<PlaceImageData[]>;

export const getPlaceImageDataById = async (
  contentId: string
): Promise<PlaceImageData[]> => {
  try {
    const response = await HttpClient.get<PlaceImageDataResponse>(
      `detailImage1?ServiceKey=${SERVICE_KEY}&_type=json&contentId=${contentId}&MobileOS=ETC&MobileApp=AppTest&imageYN=Y&subImageYN=Y&numOfRows=10`
    );

    return response.data.response.body.items.item;
  } catch (error) {
    throw new Error();
  }
};
