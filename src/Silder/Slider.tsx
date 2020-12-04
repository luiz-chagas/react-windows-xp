import React, { FunctionComponent } from "react";
import { debounce } from "../utils/debounce";

export interface SliderProps {
  id: string;
  min: number;
  max: number;
  onChange?: (value: number) => void;
  defaultValue?: number;
  label?: string;
  step?: number;
  vertical?: boolean;
  boxIndicator?: boolean;
  value?: number;
}

export const Slider: FunctionComponent<SliderProps> = ({
  id,
  min,
  max,
  defaultValue,
  onChange,
  step,
  vertical,
  label,
  boxIndicator,
  value,
}) => {
  const debouncedHandler = debounce(onChange, 100);

  return (
    <div className="field-row">
      <label htmlFor={id}>{label}</label>
      <div className={vertical ? "is-vertical" : ""}>
        <input
          id={id}
          className={boxIndicator ? "has-box-indicator" : ""}
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          onChange={(evt) => debouncedHandler(Number(evt.target.value))}
          value={value}
        />
      </div>
    </div>
  );
};
