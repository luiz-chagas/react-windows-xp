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
}

export const Typography: FunctionComponent<TypographyProps> = ({
  variant,
  children,
}) => {
  const className = "winxp-font";

  switch (variant) {
    case "span":
      return <span className={className}>{children}</span>;
    case "paragraph":
      return <p className={className}>{children}</p>;
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "h4":
      return <h4 className={className}>{children}</h4>;
    case "h5":
      return <h5 className={className}>{children}</h5>;
    case "h6":
      return <h6 className={className}>{children}</h6>;
    case "terminal":
      return <pre>{children}</pre>;
  }
};
