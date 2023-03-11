import axios from "axios";

const key = process.env.NEXT_PUBLIC_API_KEY;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const Axios = axios.create({
  baseURL,
});

export const getLocationBasedPlaceList = async () => {
  const response = await Axios.get(
    `B551011/KorService1/locationBasedList1?serviceKey=${key}&numOfRows=10&pageNo=${1}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=126.981611&mapY=37.568477&radius=1000&contentTypeId=15`
  );

  if (response.statusText !== "OK") return;

  return await response.data.response.body.items.item;
};
