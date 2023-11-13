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

export type LocationData =
  | SuccessLocationData
  | LoadingLocationData
  | ErrorLocationData;

export const getGeolocationData = (): Promise<LocationData> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        status: "error",
        error: { code: 999, message: "geolocation not supported" },
      });
    }

    const onSuccess = (location: { coords: GeolocationCoordinates }) =>
      resolve({ status: "success", coords: location.coords });

    const onError = (error: { code: number; message: string }) =>
      resolve({ status: "error", error });

    const options = {
      enableHighAccuracy: true,
      maximumAge: 5000,
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  });
};

export const isSuccessLocationData = (
  location: LocationData
): location is SuccessLocationData => {
  if (location.status === "success") return true;
  else return false;
};

export const isLoadingLocationData = (
  location: LocationData
): location is LoadingLocationData => {
  if (location.status === "loading") return true;
  else return false;
};

export const isErrorLocationData = (
  location: LocationData
): location is ErrorLocationData => {
  if (location.status === "error") return true;
  else return false;
};
