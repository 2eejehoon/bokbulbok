import { useRecoilValue } from "recoil";
import { useState, useCallback } from "react";
import { rouletteItemsState } from "@/recoil/rouletteItems";
import { RouletteItemType } from "@/types/roulette";

type useRouletteReturnType = {
  rouletteItems: RouletteItemType[];
  start: boolean;
  stop: boolean;
  spin: boolean;
  handleSpinClick: () => void;
};

export default function useRoulette(): useRouletteReturnType {
  const rouletteItems = useRecoilValue(rouletteItemsState);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [spin, setSpin] = useState(false);

  const handleSpinClick = useCallback(() => {
    setStop(false);
    setStart(true);
    setSpin(true);
    setTimeout(() => {
      setStop(true);
      setSpin(false);
    }, Math.random() * 5000 + 1000);
  }, []);

  return {
    rouletteItems,
    start,
    stop,
    spin,
    handleSpinClick,
  };
}
