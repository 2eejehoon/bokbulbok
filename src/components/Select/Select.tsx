import { MouseEvent, memo } from "react";
import styled from "styled-components";

interface SelectProps {
  options: string[];
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

function Select({ options, onClick }: SelectProps) {
  return (
    <Container>
      {options.map((option) => {
        return (
          <Option key={option} onClick={onClick}>
            {option}
          </Option>
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
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

export default memo(Select);
