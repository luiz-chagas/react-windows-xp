import React, { FunctionComponent } from "react";
import "./Typography.css";

export interface TypographyProps {
  variant:
    | "paragraph"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "terminal";
  alignment?: "left" | "center" | "right";
  pixelated?: boolean;
}

export const Typography: FunctionComponent<TypographyProps> = ({
  variant,
  children,
  alignment = "left",
  pixelated,
}) => {
  if (variant === "terminal") {
    return <pre>{children}</pre>;
  }

  const className = pixelated ? "winxp-font pixelated" : "winxp-font";

  const Tag =
    {
      paragraph: "p",
    }[variant] || variant;

  return (
    <Tag className={className} style={{ textAlign: alignment }}>
      {children}
    </Tag>
  );
};
