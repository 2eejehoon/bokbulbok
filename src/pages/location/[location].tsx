import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getLocationBasedPlacelistData } from "@/api/location";
import { QUERY_KEY } from "@/contant";
import { isLocationQuery } from "@/utils/location";
import ListLayout from "@/layout/ListLayout/ListLayout";
import PlaceList from "@/components/PlaceList/PlaceList";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Seo from "@/components/Seo/Seo";
import useGetLocationBasedPlaceInfiniteData from "@/react-query/query/useGetLocationBasedPlaceInfiniteData";
import Loading from "@/components/Loading/Loading";
import Header from "@/components/Header/Header";
import RangeSliderPopover from "@/components/RangeSliderPopover/RangeSliderPopover";
import SortSelect from "@/components/SortSelect/SortSelectModal";
import RouletteModal from "@/components/RouletteModal/RouletteModal";

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
  const { data, hasNextPage, fetchNextPage, isFetching } =
    useGetLocationBasedPlaceInfiniteData();
  const targetRef = useInfiniteScroll({ hasNextPage, fetchNextPage });

  return (
    <>
      <Header>
        <Header.Left>
          <RangeSliderPopover />
          <SortSelect />
        </Header.Left>
        <Header.Right>
          <RouletteModal />
        </Header.Right>
      </Header>
      <Seo title={"복불복"} description={"주변 음식점 리스트"} />
      <PlaceList data={data} />
      <div ref={targetRef}>{isFetching && <Loading height={30} />}</div>
    </>
  );
}

Location.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>;
};
