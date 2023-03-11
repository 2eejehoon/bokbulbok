import { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getLocationBasedPlaceList } from "../api/client";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import PlaceList from "@/components/PlaceList/PlaceList";
import FunctionBar from "@/components/FunctionBar/FunctionBar";

export default function Location() {
  const { data } = useQuery({
    queryKey: ["location"],
    queryFn: () => getLocationBasedPlaceList(),
    select: (data) => data.filter((place: any) => place.firstimage !== ""),
  });

  return (
    <>
      <FunctionBar />
      <PlaceList data={data} />
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

  await queryClient.prefetchQuery({
    queryKey: ["location"],
    queryFn: getLocationBasedPlaceList,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
