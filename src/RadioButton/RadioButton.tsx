import React, { FunctionComponent } from "react";

export interface RadioButtonProps {
  group: string;
  id: string;
  label: string;
  onClick?: (selected: string) => void;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
}

export const RadioButton: FunctionComponent<RadioButtonProps> = ({
  group,
  id,
  disabled,
  onClick,
  label,
  checked,
  defaultChecked,
}) => (
  <div className="field-row">
    <input
      disabled={disabled}
      onClick={() => onClick(id)}
      id={id}
      type="radio"
      name={group}
      value={label}
      checked={checked}
      defaultChecked={defaultChecked}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);
