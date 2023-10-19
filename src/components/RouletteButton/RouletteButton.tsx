import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useLayoutEffect, useMemo, useState } from "react";
import Button from "../common/Button/Button";
import { rouletteItemsState } from "@/recoil/rouletteItems";

interface RouletteButtonProps {
  contentId: string;
  title: string;
}

export default function RouletteButton({
  contentId,
  title,
}: RouletteButtonProps) {
  const [isIncluded, setIsIncluded] = useState(false);
  const [rouletteItems, setRouletteItems] = useRecoilState(rouletteItemsState);

  const handleAddClick = () => {
    if (rouletteItems.length === 6) {
      return alert("최대 6개까지 가능합니다");
    }

    const item = { contentId, title };

    setRouletteItems([...rouletteItems, item]);
    setIsIncluded(true);
  };

  const handleRemoveClick = () => {
    const filteredRouletteItems = rouletteItems.filter(
      (item) => item.contentId !== contentId
    );

    setRouletteItems(filteredRouletteItems);
    setIsIncluded(false);
  };

  useLayoutEffect(() => {
    if (rouletteItems.findIndex((item) => item.contentId === contentId) < 0)
      return;

    setIsIncluded(true);
  }, []);

  const ButtonRenderer = useMemo(() => {
    if (isIncluded) {
      return (
        <RemoveButton type={"button"} onClick={handleRemoveClick}>
          삭제
        </RemoveButton>
      );
    } else {
      return (
        <AddButton type={"button"} onClick={handleAddClick}>
          추가
        </AddButton>
      );
    }
  }, [isIncluded, rouletteItems]);

  return <>{ButtonRenderer}</>;
}

const RemoveButton = styled(Button)`
  position: absolute;
  font-size: 11px;
  font-weight: 700;
  right: 5px;
  bottom: 5px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
`;

const AddButton = styled(Button)`
  position: absolute;
  font-size: 11px;
  font-weight: 700;
  right: 5px;
  bottom: 5px;
  background-color: black;
  border-radius: 20px;
  color: white;
`;
