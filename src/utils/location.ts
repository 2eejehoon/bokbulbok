import { SortCode } from "./sort";

type SuccessLocationData = {
  status: "success";
  coords: GeolocationCoordinates;
};
type LoadingLocationData = {
  status: "loading";
};
type ErrorLocationData = {
  status: "error";
  error: { code: number; message: string };
};

export type LocationData = SuccessLocationData | LoadingLocationData | ErrorLocationData;

export const getGeolocationData = (): Promise<LocationData> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        status: "error",
        error: { code: 999, message: "geolocation not supported" },
      });
    }

    const onSuccess = (location: { coords: GeolocationCoordinates }) => {
      resolve({ status: "success", coords: location.coords });
    };

    const onError = (error: { code: number; message: string }) => {
      resolve({ status: "error", error });
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 5000,
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  });
};

export const isSuccessLocationData = (location: LocationData): location is SuccessLocationData => {
  return location.status === "success";
};

export const isLoadingLocationData = (location: LocationData): location is LoadingLocationData => {
  return location.status === "loading";
};

export const isErrorLocationData = (location: LocationData): location is ErrorLocationData => {
  return location.status === "error";
};

export type LocationQuery<T> = T & {
  lng: string;
  lat: string;
  range: string;
  sort: SortCode;
};

export const isLocationQuery = <T extends {}>(query: T): query is LocationQuery<T> => {
  return "lng" in query && "lat" in query && "range" in query && "sort" in query;
};
