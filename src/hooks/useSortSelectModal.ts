import { useRouter } from "next/router";
import { useCallback, useState, MouseEvent } from "react";
import useModal from "./useModal";
import { convertQueryToSort, convertSortToQuery } from "@/utils/convert";

type useSortSelectReturnType = [
  sortValue: string,
  isModalOpen: boolean,
  handleModalOpen: () => void,
  handleModalClose: () => void,
  handleSortClick: (e: MouseEvent<HTMLLIElement>) => void
];

export default function useSortSelect(): useSortSelectReturnType {
  const router = useRouter();
  const { lng, lat, range, sort } = router.query;
  const [sortValue, setSortValue] = useState(convertQueryToSort(String(sort)));
  const [isModalOpen, handleModalOpen, handleModalClose] = useModal();

  const handleSortClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setSortValue(e.currentTarget.innerHTML);
    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${range}&sort=${convertSortToQuery(
        e.currentTarget.innerHTML
      )}`
    );
    handleModalClose();
  }, []);

  return [sortValue, isModalOpen, handleModalOpen, handleModalClose, handleSortClick];
}
