import React, { FunctionComponent } from "react";
import "./Wallpaper.css";

export interface WallpaperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  fullScreen?: boolean;
}

export const Wallpaper: FunctionComponent<WallpaperProps> = ({
  children,
  fullScreen,
  ...rest
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
    <div
      {...rest}
      className={`wallpaper ` + rest.className}
      style={fullScreenStyles}
    >
      {children}
    </div>
  );
};
