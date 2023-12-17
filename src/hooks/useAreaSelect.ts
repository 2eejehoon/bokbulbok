import { ParsedUrlQuery } from "querystring";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/router";
import {
  Area,
  AreaQuery,
  convertAreaToCode,
  convertCodeToArea,
} from "@/utils/area";

const useAreaSelect = () => {
  const router = useRouter();
  const { areaCode, sort } = router.query as AreaQuery<ParsedUrlQuery>;
  const [area, setArea] = useState(convertCodeToArea(areaCode));

  const onAreaClick = (e: MouseEvent<HTMLLIElement>) => {
    router.push(
      `area?areaCode=${convertAreaToCode(
        e.currentTarget.innerHTML as Area
      )}&sort=${sort}`
    );
    setArea(e.currentTarget.innerHTML as Area);
  };

  return {
    area,
    onAreaClick,
  };
};

export default useAreaSelect;
