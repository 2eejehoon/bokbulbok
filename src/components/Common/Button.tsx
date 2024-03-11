import {
  ReactNode,
  memo,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = forwardRef(
  (
    { children, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <StyledButton {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export default memo(Button);
