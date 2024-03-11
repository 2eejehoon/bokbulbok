import Loading from "@/components/Common/Loading";
import PlaceList from "@/components/Common/PlaceList";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useGetAreaBasedPlaceInfiniteData from "@/react-query/query/useGetAreaBasedPlaceInfiniteData";

export default function AreaPlaceList() {
  const { data, isFetching, hasNextPage, fetchNextPage } = useGetAreaBasedPlaceInfiniteData();
  const ref = useInfiniteScroll({ hasNextPage, fetchNextPage });

  return (
    <>
      <PlaceList data={data} />
      <div ref={ref}>{isFetching ? <Loading height={30} /> : null}</div>
    </>
  );
}
