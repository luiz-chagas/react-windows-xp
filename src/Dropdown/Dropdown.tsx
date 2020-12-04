import React, { FunctionComponent } from "react";

export interface DropdownProps {
  onChange: (value: string) => void;
  value?: string;
  children:
    | React.ReactElement<DropDownOptionProps>
    | React.ReactElement<DropDownOptionProps>[];
}

const DropdownSelect: FunctionComponent<DropdownProps> = ({
  children,
  onChange,
  value,
}) => (
  <select value={value} onChange={(evt) => onChange(evt.target.value)}>
    {children}
  </select>
);

export interface DropDownOptionProps {
  id: string;
  defaultSelected?: boolean;
}

const Option: FunctionComponent<DropDownOptionProps> = ({
  id,
  defaultSelected,
  children,
}) => (
  <option selected={defaultSelected} value={id} id={id}>
    {children}
  </option>
);

export const Dropdown = Object.assign(DropdownSelect, { Option });
