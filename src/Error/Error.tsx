import React from "react";
import { Window } from "../Window";
import { PropsWithChildren } from "react";
import ErrorIcon from "../assets/icons/gtk-cancel.png";
import { Button } from "../Button";
import { WindowProps } from "../Window/Window";

export interface ErrorProps extends WindowProps {
  title: string;
  iconSize?: number;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
}

export const Error = ({
  onClose,
  title,
  children,
  iconSize = 48,
  confirmText = "Ok",
  onConfirm,
  ...windowProps
}: PropsWithChildren<ErrorProps>) => {
  return (
    <Window title={title} onClose={onClose} {...windowProps} showClose>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex" }}>
          <img src={ErrorIcon} alt="Error" width={iconSize} height={iconSize} />
          {children}
        </div>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </div>
    </Window>
  );
};
