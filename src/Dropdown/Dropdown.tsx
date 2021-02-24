import React, { FunctionComponent } from "react";

export interface DropdownProps
  extends Omit<
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    "onChange"
  > {
  onChange: (value: string) => void;
  value?: string;
  children:
    | React.ReactElement<DropDownOptionProps>
    | React.ReactElement<DropDownOptionProps>[];
}

export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  onChange,
  value,
  ...rest
}) => (
  <select
    {...rest}
    value={value}
    onChange={(evt) => onChange(evt.target.value)}
  >
    {children}
  </select>
);

export interface DropDownOptionProps
  extends Omit<
    React.DetailedHTMLProps<
      React.OptionHTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
    >,
    "value"
  > {
  id: string;
}

export const DropdownOption: FunctionComponent<DropDownOptionProps> = ({
  id,
  children,
  ...rest
}) => (
  <option {...rest} value={id} id={id}>
    {children}
  </option>
);
