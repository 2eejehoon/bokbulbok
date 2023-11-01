export type LocationQuery<T> = T & {
  lng: string;
  lat: string;
  range: string;
  sort: string;
};

export const isLocationQuery = <T extends {}>(
  query: T
): query is LocationQuery<T> => {
  return (
    "lng" in query && "lat" in query && "range" in query && "sort" in query
  );
};
