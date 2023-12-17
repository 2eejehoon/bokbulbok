import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { dehydrate } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/contant";
import { getAreaBasedPlaceListData } from "@/api/area";
import { isAreaQuery } from "@/utils/area";
import useGetAreaBasedPlaceInfiniteData from "@/react-query/query/useGetAreaBasedPlaceInfiniteData";
import Seo from "@/components/Seo/Seo";
import PlaceList from "@/components/PlaceList/PlaceList";
import Loading from "@/components/Loading/Loading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import ListLayout from "@/layout/ListLayout/ListLayout";
import Header from "@/components/Header/Header";
import SortSelect from "@/components/SortSelect/SortSelectModal";
import RouletteModal from "@/components/RouletteModal/RouletteModal";
import AreaSelect from "@/components/AreaSelect/AreaSelect";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.AREA_LIST],
    queryFn: ({ pageParam = 1 }) => {
      if (isAreaQuery(context.query)) {
        const { areaCode, sort } = context.query;
        return getAreaBasedPlaceListData(pageParam, areaCode, sort);
      }
    },
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default function Area() {
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useGetAreaBasedPlaceInfiniteData();
  const ref = useInfiniteScroll({ hasNextPage, fetchNextPage });

  return (
    <>
      <Header>
        <Header.Left>
          <AreaSelect />
          <SortSelect />
        </Header.Left>
        <Header.Right>
          <RouletteModal />
        </Header.Right>
      </Header>
      <Seo />
      <PlaceList data={data} />
      <div ref={ref}>{isFetching && <Loading height={30} />}</div>
    </>
  );
}

Area.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>;
};
