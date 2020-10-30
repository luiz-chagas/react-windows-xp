import React, { FunctionComponent } from "react";
import "./Wallpaper.css";

export interface WallpaperProps {
  fullScreen?: boolean;
}

export const Wallpaper: FunctionComponent<WallpaperProps> = ({
  children,
  fullScreen,
}) => {
  const fullScreenStyles: React.CSSProperties = fullScreen
    ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
      }
    : {};

  return (
    <div className="wallpaper" style={fullScreenStyles}>
      {children}
    </div>
  );
};
