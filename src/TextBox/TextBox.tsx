import React, { FunctionComponent } from "react";

export interface TextBoxProps {
  stacked?: boolean;
  disabled?: boolean;
  onChange?: (text: string) => void;
  value?: string;
  placeholder?: string;
  label: string;
  id: string;
}

export const TextBox: FunctionComponent<TextBoxProps> = ({
  id,
  value,
  placeholder,
  stacked,
  label,
  disabled,
  onChange,
}) => {
  const className = stacked ? "field-row-stacked" : "field-row";

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        id={id}
        type="text"
      />
    </div>
  );
};
