import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type SelectProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLUListElement>;

type OptionProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLLIElement>;

function _Select({ children, ...props }: SelectProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Option = ({ children, ...props }: OptionProps) => {
  return <_Option {...props}>{children}</_Option>;
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const _Option = styled.li`
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

export const Select = {
  Root: _Select,
  Option: Option,
};
