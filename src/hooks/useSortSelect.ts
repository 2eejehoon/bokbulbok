import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import { LocationQuery } from "@/utils/location";
import { Sort, convertQueryToSort, convertSortToQuery } from "@/utils/sort";

type useSortSelectReturnType = {
  sortValue: Sort;
  onSortClick: (e: MouseEvent<HTMLLIElement>) => void;
};

export default function useSortSelect(): useSortSelectReturnType {
  const router = useRouter();
  const { lng, lat, range, sort } =
    router.query as LocationQuery<ParsedUrlQuery>;
  const [sortValue, setSortValue] = useState(convertQueryToSort(sort));

  const onSortClick = (e: MouseEvent<HTMLLIElement>) => {
    setSortValue(e.currentTarget.innerHTML as Sort);
    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${range}&sort=${convertSortToQuery(
        e.currentTarget.innerHTML as Sort
      )}`
    );
  };

  return {
    sortValue,
    onSortClick,
  };
}