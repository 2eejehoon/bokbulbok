import { useRecoilState } from "recoil";
import { useLayoutEffect, useState } from "react";
import Button from "../common/Button/Button";
import style from "./RouletteButton.module.scss";
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

  return (
    <div className={style.buttonContainer}>
      {!isIncluded && (
        <Button type={"button"} onClick={handlePlusClick} color={"white"} size={"large"}>
          &#10133;
        </Button>
      )}
      {isIncluded && (
        <Button type={"button"} onClick={handleMinusClick} color={"white"} size={"large"}>
          &#10134;
        </Button>
      )}
    </div>
  );
}
