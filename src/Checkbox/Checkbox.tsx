import React, { FunctionComponent } from "react";

export interface CheckboxProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange"
  > {
  id: string;
  onChange?: (active: boolean) => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  onChange,
  children,
  ...rest
}) => (
  <div className="field-row">
    <input
      {...rest}
      onChange={(evt) => onChange(evt.target.checked)}
      type="checkbox"
      id={id}
    />
    <label htmlFor={id}>{children}</label>
  </div>
);
