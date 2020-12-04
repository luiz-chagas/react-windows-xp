import React, { FunctionComponent } from "react";

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  disabled,
  onClick,
  children,
}) => (
  <button disabled={disabled} onClick={onClick}>
    {children}
  </button>
);
