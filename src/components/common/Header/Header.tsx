import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import useStickyHeader from "./useStickyHeader";

type HeaderProps = { children: ReactNode } & HTMLAttributes<HTMLElement>;
type DivProps = { children: ReactNode } & HTMLAttributes<HTMLDivElement>;

const Header = ({ children, ...props }: HeaderProps) => {
  const isSticky = useStickyHeader();

  return (
    <_Header {...props} isSticky={isSticky}>
      {children}
    </_Header>
  );
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

const _Header = styled.header<{ isSticky: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px lightgrey solid;
  z-index: 1;
  width: 100%;
  min-width: 350px;
  max-width: 400px;
  height: 50px;
  padding: 5px;
  top: 0;
  position: ${({ isSticky }) => (isSticky ? "sticky" : "relative")};
  background-color: white;
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
