import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type HeaderProps = { children: ReactNode } & HTMLAttributes<HTMLElement>;
type DivProps = { children: ReactNode } & HTMLAttributes<HTMLDivElement>;

const Header = ({ children, ...props }: HeaderProps) => {
  return <_Header {...props}>{children}</_Header>;
};

const Left = ({ children, ...props }: DivProps) => {
  return <_Left {...props}>{children}</_Left>;
};

const Right = ({ children, ...props }: DivProps) => {
  return <_Right {...props}>{children}</_Right>;
};

Header.Left = Left;
Header.Right = Right;
Header.displayName = "Header";

const _Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px;
  border-bottom: 1px lightgrey solid;
`;

const _Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const _Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default Header;
