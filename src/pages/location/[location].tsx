import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getLocationBasedPlacelistData } from "@/api/location";
import { QUERY_KEY } from "@/contant";
import { isLocationQuery } from "@/utils/location";
import ListLayout from "@/layout/ListLayout/ListLayout";
import Seo from "@/components/common/Seo/Seo";
import LocationPageHeader from "@/components/location/LocationPageHeader/LocationPageHeader";
import LocationPlaceList from "@/components/location/LocationPlaceList/LocationPlaceList";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.LOCATION_LIST],
    queryFn: ({ pageParam = 1 }) => {
      if (isLocationQuery(context.query)) {
        const { lng, lat, range, sort } = context.query;
        return getLocationBasedPlacelistData(pageParam, lng, lat, range, sort);
      }
    },
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default function Location() {
  return (
    <>
      <Seo title={"복불복"} description={"주변 음식점 리스트"} />
      <LocationPageHeader />
      <LocationPlaceList />
    </>
  );
}

Location.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>;
};
