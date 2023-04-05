import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect, useState } from "react";
import Button from "../common/Button/Button";
import { rouletteItemsState } from "@/recoil/rouletteItems";
import { QUERY_KEY } from "@/contant";
import { getPlaceCommonDataById } from "@/pages/api/place";

interface RouletteButtonProps {
  contentId: string;
}

export default function RouletteButton({ contentId }: RouletteButtonProps) {
  const [isIncluded, setIsIncluded] = useState(false);
  const [rouletteItems, setRouletteItems] = useRecoilState(rouletteItemsState);

  const { data } = useQuery({
    queryKey: [QUERY_KEY.PLACECOMMON, contentId],
    queryFn: () => getPlaceCommonDataById(contentId),
  });

  const handleAddClick = () => {
    if (rouletteItems.length === 6) {
      return alert("최대 6개까지 가능합니다");
    }

    setRouletteItems([...rouletteItems, data]);
    setIsIncluded(true);
  };

  const handleDeleteClick = () => {
    const filteredRouletteItems = rouletteItems.filter(
      (item) => item.contentid !== contentId
    );

    setRouletteItems(filteredRouletteItems);
    setIsIncluded(false);
  };

  useLayoutEffect(() => {
    if (rouletteItems.findIndex((item) => item.contentid == contentId) > -1) {
      setIsIncluded(true);
    }
  }, []);

  switch (isIncluded) {
    case false:
      return (
        <Button type={"button"} onClick={handleAddClick} color={"white"} size={"small"}>
          &#10133;
        </Button>
      );

    case true:
      return (
        <Button
          type={"button"}
          onClick={handleDeleteClick}
          color={"white"}
          size={"small"}
        >
          &#10134;
        </Button>
      );

    default:
      return null;
  }
}
