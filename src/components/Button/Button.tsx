import {
  ReactNode,
  MouseEventHandler,
  memo,
  ButtonHTMLAttributes,
} from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, type, onClick, ...props }: ButtonProps) {
  return (
    <StyledButton className={props.className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export default memo(Button);
