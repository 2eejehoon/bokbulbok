import { useRecoilState } from "recoil";
import { useLayoutEffect, useMemo, useState } from "react";
import Button from "../common/Button/Button";
import { rouletteItemsState } from "@/recoil/rouletteItems";

interface RouletteButtonProps {
  contentId: string;
  title: string;
}

export default function RouletteButton({ contentId, title }: RouletteButtonProps) {
  const [isIncluded, setIsIncluded] = useState(false);
  const [rouletteItems, setRouletteItems] = useRecoilState(rouletteItemsState);

  const handlePlusClick = () => {
    if (rouletteItems.length === 6) {
      return alert("최대 6개까지 가능합니다");
    }

    const item = { contentId, title };

    setRouletteItems([...rouletteItems, item]);
    setIsIncluded(true);
  };

  const handleMinusClick = () => {
    const filteredRouletteItems = rouletteItems.filter(
      (item) => item.contentId !== contentId
    );

    setRouletteItems(filteredRouletteItems);
    setIsIncluded(false);
  };

  useLayoutEffect(() => {
    if (rouletteItems.findIndex((item) => item.contentId === contentId) < 0) return;

    setIsIncluded(true);
  }, []);

  const ButtonRenderer = useMemo(() => {
    if (isIncluded) {
      return (
        <Button
          type={"button"}
          onClick={handleMinusClick}
          color={"black"}
          size={"roulette"}
        >
          삭제
        </Button>
      );
    } else {
      return (
        <Button
          type={"button"}
          onClick={handlePlusClick}
          color={"grey"}
          size={"roulette"}
        >
          추가
        </Button>
      );
    }
  }, [isIncluded, rouletteItems]);

  return <>{ButtonRenderer}</>;
}
