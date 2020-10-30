import React, { FunctionComponent } from "react";
import Draggable from "react-draggable";

export interface WindowProps {
  title: string;
  width?: string;
  hideClose?: boolean;
  hideMaximize?: boolean;
  hideMinimize?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export const Window: FunctionComponent<WindowProps> = ({
  title,
  width,
  hideClose,
  hideMaximize,
  hideMinimize,
  children,
  onClose,
  onMaximize,
  onMinimize,
}) => {
  return (
    <Draggable>
      <div className="window" style={{ width: width }}>
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            {!hideMinimize && (
              <button aria-label="Minimize" onClick={onMinimize}></button>
            )}
            {!hideMaximize && (
              <button aria-label="Maximize" onClick={onMaximize}></button>
            )}
            {!hideClose && (
              <button aria-label="Close" onClick={onClose}></button>
            )}
          </div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </Draggable>
  );
};
