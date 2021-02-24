import React, { FunctionComponent } from "react";

export interface TextBoxProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange"
  > {
  stacked?: boolean;
  onChange?: (text: string) => void;
  label?: React.ReactNode;
  id: string;
}

export const TextBox: FunctionComponent<TextBoxProps> = ({
  id,
  stacked,
  label,
  onChange,
  ...rest
}) => {
  const className = stacked ? "field-row-stacked" : "field-row";

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        {...rest}
        onChange={(evt) => onChange(evt.target.value)}
        type="text"
      />
    </div>
  );
};
