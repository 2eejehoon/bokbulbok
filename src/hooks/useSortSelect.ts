import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { useState, MouseEvent, useCallback } from "react";
import { LocationQuery } from "@/types/query";
import { Sort, convertQueryToSort, convertSortToQuery } from "@/utils/convert";

type useSortSelectReturnType = {
  sortValue: Sort;
  isSelectOpen: boolean;
  handleButtonClick: () => void;
  handleBackgroundClick: () => void;
  handleSortClick: (e: MouseEvent<HTMLLIElement>) => void;
};

export default function useSortSelect(): useSortSelectReturnType {
  const router = useRouter();
  const { lng, lat, range, sort } =
    router.query as LocationQuery<ParsedUrlQuery>;
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [sortValue, setSortValue] = useState(convertQueryToSort(sort));

  const handleButtonClick = useCallback(
    () => setIsSelectOpen((prev) => !prev),
    []
  );

  const handleBackgroundClick = useCallback(() => setIsSelectOpen(false), []);

  const handleSortClick = (e: MouseEvent<HTMLLIElement>) => {
    setSortValue(e.currentTarget.innerHTML as Sort);
    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${range}&sort=${convertSortToQuery(
        e.currentTarget.innerHTML as Sort
      )}`
    );
    setIsSelectOpen(false);
  };

  return {
    sortValue,
    isSelectOpen,
    handleBackgroundClick,
    handleButtonClick,
    handleSortClick,
  };
}
