import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  style: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  type,
  style,
  onClick,
}: ButtonProps) {
  return (
    <button type={type} className={style} onClick={onClick}>
      {children}
    </button>
  );
}
