import styled from "styled-components";
import Button from "../Button/Button";
import { SORT_ARRAY } from "@/contant";
import useSortSelect from "@/hooks/useSortSelect";

export default function SortSelect() {
  const { sortValue, isSelectOpen, handleButtonClick, handleSortClick } =
    useSortSelect();

  return (
    <Container>
      <SelectButton type={"button"} onClick={handleButtonClick}>
        {sortValue}
      </SelectButton>
      {isSelectOpen && (
        <Select>
          {SORT_ARRAY.map((option) => {
            return (
              <Option key={option} onClick={handleSortClick}>
                {option}
              </Option>
            );
          })}
        </Select>
      )}
    </Container>
  );
}

const Container = styled.div``;

const SelectButton = styled(Button)`
  font-size: 12px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
  color: black;
`;

const Select = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 150px;
  z-index: 1;
  background-color: white;
  top: 30px;
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
