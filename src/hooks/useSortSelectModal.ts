import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import useModal from "./useModal";
import { LocationQuery } from "@/types/query";
import { Sort, convertQueryToSort, convertSortToQuery } from "@/utils/convert";

type useSortSelectReturnType = [
  sortValue: Sort,
  isModalOpen: boolean,
  handleModalOpen: () => void,
  handleModalClose: () => void,
  handleSortClick: (e: MouseEvent<HTMLLIElement>) => void
];

export default function useSortSelect(): useSortSelectReturnType {
  const router = useRouter();
  const { lng, lat, range, sort } =
    router.query as LocationQuery<ParsedUrlQuery>;
  const [sortValue, setSortValue] = useState(convertQueryToSort(sort));
  const [isModalOpen, handleModalOpen, handleModalClose] = useModal();

  const handleSortClick = (e: MouseEvent<HTMLLIElement>) => {
    setSortValue(e.currentTarget.innerHTML as Sort);
    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${range}&sort=${convertSortToQuery(
        e.currentTarget.innerHTML as Sort
      )}`
    );
    handleModalClose();
  };

  return [
    sortValue,
    isModalOpen,
    handleModalOpen,
    handleModalClose,
    handleSortClick,
  ];
}
