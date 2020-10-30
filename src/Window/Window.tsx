import React, { FunctionComponent } from 'react';
import 'xp.css/dist/XP.css';

export interface WindowProps {
  title: string;
  width?: string;
  hideClose?: boolean;
}

export const Window: FunctionComponent<WindowProps> = ({ title, width }) => {
  return (
    <div className="window" style={{ width: width }}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <p>There's so much room for activities!</p>
      </div>
    </div>
  );
};
