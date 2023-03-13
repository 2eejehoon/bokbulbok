import { ReactElement } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getDataByLocation } from "../api/client";
import { QUERY_KEY } from "@/contant";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import LocationSelectGroup from "@/components/location/LocationSelectGroup/LocationSelectGroup";
import LocationPlaceList from "@/components/location/LocationPlaceList/LocationPlaceList";

export default function Location() {
  return (
    <>
      <LocationSelectGroup />
      <LocationPlaceList />
    </>
  );
}

Location.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.LOCATION],
    queryFn: ({ pageParam = 1 }) => getDataByLocation(pageParam),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
