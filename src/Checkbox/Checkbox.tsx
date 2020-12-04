import React, { FunctionComponent } from "react";

export interface CheckboxProps {
  id: string;
  label: string;
  onChange?: (active: boolean) => void;
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  label,
  defaultChecked,
  onChange,
  disabled,
  checked,
}) => (
  <div className="field-row">
    <input
      onChange={(evt) => onChange(evt.target.checked)}
      defaultChecked={defaultChecked}
      disabled={disabled}
      type="checkbox"
      id={id}
      checked={checked}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);
