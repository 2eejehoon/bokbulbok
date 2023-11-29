import styled from "styled-components";
import Button from "../Button/Button";
import { SORT_ARRAY } from "@/contant";
import useSortSelect from "@/hooks/useSortSelect";

export default function SortSelect() {
  const {
    sortValue,
    isSelectOpen,
    handleButtonClick,
    handleBackgroundClick,
    handleSortClick,
  } = useSortSelect();

  return (
    <Container>
      <SelectButton type={"button"} onClick={handleButtonClick}>
        {sortValue}
      </SelectButton>
      {isSelectOpen && (
        <>
          <Select>
            {SORT_ARRAY.map((option) => {
              return (
                <Option key={option} onClick={handleSortClick}>
                  {option}
                </Option>
              );
            })}
          </Select>
          <Background onClick={handleBackgroundClick} />
        </>
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
  z-index: 2;
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

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;
