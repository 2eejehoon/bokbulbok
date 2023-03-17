import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getDataByLocation } from "../api/place";
import { QUERY_KEY } from "@/contant";

export default function LocationDetail() {
  return <></>;
}

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
