import styled from "styled-components";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import { Select } from "../Select/Select";
import { SORT_ARRAY } from "@/contant";
import useSortSelect from "@/hooks/useSortSelect";

export default function SortSelect() {
  const { sortValue, onSortClick } = useSortSelect();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <SelectButton>{sortValue}</SelectButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content width={150}>
          <Select.Root>
            {SORT_ARRAY.map((sort, index) => {
              return (
                <Select.Option key={index} onClick={onSortClick}>
                  {sort}
                </Select.Option>
              );
            })}
          </Select.Root>
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
