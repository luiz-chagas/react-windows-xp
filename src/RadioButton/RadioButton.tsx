import React, { FunctionComponent } from "react";

export interface RadioButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type" | "onClick"
  > {
  group: string;
  id: string;
  label: string;
  onClick?: (selected: string) => void;
}

export const RadioButton: FunctionComponent<RadioButtonProps> = ({
  group,
  id,
  onClick,
  label,
  ...rest
}) => (
  <div className="field-row">
    <input
      {...rest}
      onClick={() => onClick(id)}
      id={id}
      type="radio"
      name={group}
      value={label}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);
