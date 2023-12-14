import styled from "styled-components";
import Button from "../Button/Button";
import { SORT_ARRAY } from "@/contant";
import useSortSelect from "@/hooks/useSortSelect";
import Popover from "../Popover/Popover";

export default function SortSelect() {
  const { sortValue, onSortClick } = useSortSelect();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <SelectButton>{sortValue}</SelectButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content width={150}>
          {SORT_ARRAY.map((option) => {
            return <Option onClick={onSortClick}>{option}</Option>;
          })}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

const SelectButton = styled(Button)`
  font-size: 12px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
  color: black;
`;

const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  border-bottom: 1px solid lightgrey;
  &:last-child {
    border-bottom: none;
  }
`;
