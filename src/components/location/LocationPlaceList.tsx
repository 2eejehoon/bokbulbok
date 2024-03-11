import Loading from "@/components/common/Loading";
import PlaceList from "@/components/common/PlaceList";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useGetLocationBasedPlaceInfiniteData from "@/react-query/query/useGetLocationBasedPlaceInfiniteData";

export default function LocationPlaceList() {
  const { data, isFetching, hasNextPage, fetchNextPage } = useGetLocationBasedPlaceInfiniteData();
  const ref = useInfiniteScroll({ hasNextPage, fetchNextPage });

  return (
    <>
      <PlaceList data={data} />
      <div ref={ref}>{isFetching ? <Loading height={30} /> : null}</div>
    </>
  );
}
