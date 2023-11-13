import {
  ReactNode,
  MouseEventHandler,
  memo,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef(
  (
    { children, type, onClick, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <StyledButton {...props} ref={ref} type={type} onClick={onClick}>
        {children}
      </StyledButton>
    );
  }
);

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export default memo(Button);
