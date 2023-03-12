import { ReactElement } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getLocationData } from "../api/client";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import FunctionBar from "@/components/common/FunctionBar/FunctionBar";
import { QUERY_KEY } from "@/contant";
import LocationPlaceList from "@/components/location/LocationPlaceList/LocationPlaceList";

export default function Location() {
  return (
    <>
      <FunctionBar />
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

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.LOCATION],
    queryFn: ({ pageParam = 1 }) => getLocationData(pageParam),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
