import React, { FunctionComponent } from "react";

export interface WindowProps {
  title: string;
  width?: string;
  showClose?: boolean;
  showMaximize?: boolean;
  showMinimize?: boolean;
  showHelp?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onHelp?: () => void;
}

export const Window: FunctionComponent<WindowProps> = ({
  title,
  width,
  showClose,
  showMaximize,
  showMinimize,
  showHelp,
  onClose,
  onMaximize,
  onMinimize,
  onHelp,
  children,
}) => (
  <div className="window" style={{ width: width ?? "auto" }}>
    <div className="title-bar">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        {showMinimize && (
          <button aria-label="Minimize" onClick={onMinimize}></button>
        )}
        {showMaximize && (
          <button aria-label="Maximize" onClick={onMaximize}></button>
        )}
        {showHelp && <button aria-label="Help" onClick={onHelp}></button>}
        {showClose && <button aria-label="Close" onClick={onClose}></button>}
      </div>
    </div>
    <div className="window-body">{children}</div>
  </div>
);
