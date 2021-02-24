import React, { FunctionComponent } from "react";
import { debounce } from "../utils/debounce";

export interface SliderProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange"
  > {
  id: string;
  min: number;
  max: number;
  onChange?: (value: number) => void;
  label?: React.ReactNode;
  vertical?: boolean;
  boxIndicator?: boolean;
}

export const Slider: FunctionComponent<SliderProps> = ({
  id,
  onChange,
  vertical,
  label,
  boxIndicator,
  ...rest
}) => {
  const debouncedHandler = debounce(onChange, 100);

  return (
    <div className="field-row">
      <label htmlFor={id}>{label}</label>
      <div className={vertical ? "is-vertical" : ""}>
        <input
          {...rest}
          className={boxIndicator ? "has-box-indicator" : ""}
          type="range"
          onChange={(evt) => debouncedHandler(Number(evt.target.value))}
        />
      </div>
    </div>
  );
};
