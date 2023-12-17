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
  const { pathname, query } = router;
  const { sort } = router.query as LocationQuery<ParsedUrlQuery>;
  const [sortValue, setSortValue] = useState(convertQueryToSort(sort));

  const onSortClick = (e: MouseEvent<HTMLLIElement>) => {
    router.push({
      pathname: pathname,
      query: {
        ...query,
        sort: convertSortToQuery(e.currentTarget.innerHTML as Sort),
      },
    });
    setSortValue(e.currentTarget.innerHTML as Sort);
  };

  return {
    sortValue,
    onSortClick,
  };
}
