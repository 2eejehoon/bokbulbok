import { useRecoilValue } from "recoil";
import { useState, useCallback, useMemo } from "react";
import { rouletteItemsState } from "@/recoil/rouletteItems";
import { convertLengthToText } from "@/utils/convert";
import { RouletteItemType } from "@/types/roulette";

type useRouletteReturnType = [
  rouletteItems: RouletteItemType[],
  start: string,
  stop: string,
  spin: boolean,
  length: string,
  handleSpinClick: () => void
];

export default function useRoulette(): useRouletteReturnType {
  const rouletteItems = useRecoilValue(rouletteItemsState);
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("stop");
  const [spin, setSpin] = useState(false);

  const handleSpinClick = useCallback(() => {
    setStop("");
    setStart("start");
    setSpin(true);
    setTimeout(() => {
      setStop("stop");
      setSpin(false);
    }, Math.random() * 5000 + 1000);
  }, []);

  const length = useMemo(
    () => convertLengthToText(rouletteItems.length),
    [rouletteItems.length]
  );

  return [rouletteItems, start, stop, spin, length, handleSpinClick];
}
