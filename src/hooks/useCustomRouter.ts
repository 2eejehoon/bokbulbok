import { useRouter } from "next/router";
import { useCallback } from "react";
import { rangeConverter, sortConverter } from "@/utils/convert";

export default function useCustomRouter(type: string) {
  const router = useRouter();
  const { lng, lat, range, sort } = router.query;

  const handleSortPush = useCallback((value: string) => {
    const newSort = sortConverter(value);
    router.push(`/place/location?lng=${lng}&lat=${lat}&range=${range}&sort=${newSort}`);
  }, []);

  const handleRangePush = useCallback((value: number) => {
    const newRange = rangeConverter(value);
    router.push(`/place/location?lng=${lng}&lat=${lat}&range=${newRange}&sort=${sort}`);
  }, []);

  switch (type) {
    case "sort":
      return handleSortPush;

    case "range":
      return handleRangePush;
  }
}
