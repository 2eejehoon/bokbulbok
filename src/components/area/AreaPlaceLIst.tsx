import Loading from "@/components/common/Loading";
import PlaceList from "@/components/common/PlaceList";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useGetAreaBasedPlaceInfiniteData from "@/react-query/query/useGetAreaBasedPlaceInfiniteData";

export default function AreaPlaceList() {
  const { data, isFetching, hasNextPage, fetchNextPage } = useGetAreaBasedPlaceInfiniteData();
  const ref = useInfiniteScroll({ hasNextPage, fetchNextPage });
  console.log(data);

  return (
    <>
      <PlaceList data={data} />
      <div ref={ref}>{isFetching ? <Loading height={30} /> : null}</div>
    </>
  );
}
