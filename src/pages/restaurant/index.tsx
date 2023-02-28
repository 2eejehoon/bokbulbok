import { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NavLayout from "@/components/common/Layout/NavLayout/NavLayout";
import List from "@/components/common/List/List";
import FunctionBar from "@/components/restaurant/FunctionBar/FunctionBar";

const key =
  "Ezf3cEeRrNZiCX%2Fiq1QblHL7cjZRGgtAvRHdA5EvTNo35YqG%2BiAYYuR84n9iS1OGx0cXpPp3CHhBWHsph0KVZQ%3D%3D";
const url = `http://apis.data.go.kr/B551011/KorService/areaBasedList?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${key}&listYN=Y&arrange=A&_type=json&contentTypeId=39&areaCode=&sigunguCode=&cat1=A05&cat2=A0502&cat3=`;

function getRestaurants() {
  return axios.get(url).then(({ data }) => data);
}

export default function Restaurant() {
  const { data } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurants,
    select: (data) =>
      data.response.body.items.item.filter((el: any) => el.firstimage !== ""),
  });

  return (
    <>
      <FunctionBar />
      <List data={data} />
    </>
  );
}

Restaurant.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NavLayout>{page}</NavLayout>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["restaurants"], getRestaurants);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
