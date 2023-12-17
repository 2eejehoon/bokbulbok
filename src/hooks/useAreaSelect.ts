import {
  Area,
  AreaQuery,
  convertAreaToCode,
  convertCodeToArea,
} from "@/utils/area";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import { MouseEvent } from "react";

const useAreaSelect = () => {
  const router = useRouter();
  const { areaCode, sort } = router.query as AreaQuery<ParsedUrlQuery>;
  const [area, setArea] = useState(convertCodeToArea(areaCode));

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    router.push(
      `area?areaCode=${convertAreaToCode(
        e.currentTarget.innerHTML as Area
      )}&sort=${sort}`
    );
    setArea(e.currentTarget.innerHTML as Area);
  };

  return {
    area,
    onClick,
  };
};

export default useAreaSelect;
