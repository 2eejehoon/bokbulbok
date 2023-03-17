import { ReactElement } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getPlaceData } from "../api/place";
import { QUERY_KEY } from "@/contant";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import NestedLayout from "@/layout/NestedLayout/NestedLayout";
import PlaceList from "@/components/PlaceList/PlaceList";
import SelectGroup from "@/components/SelectGroup/SelectGroup";

export default function Place() {
  return (
    <>
      <SelectGroup />
      <PlaceList />
    </>
  );
}

Place.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NestedLayout>{page}</NestedLayout>
    </BaseLayout>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.PLACE],
    queryFn: ({ pageParam = 1 }) => getPlaceData(pageParam),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
