import React, { FunctionComponent } from "react";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => <button {...rest}>{children}</button>;
