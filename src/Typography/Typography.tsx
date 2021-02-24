import React, { FunctionComponent } from "react";
import "./Typography.css";

type TextProps =
  | React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  | React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  | React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLPreElement>,
      HTMLPreElement
    >
  | React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >;

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
  pixelated?: boolean;
}

export const Typography: FunctionComponent<TypographyProps & TextProps> = ({
  variant,
  children,
  pixelated,
  ...rest
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
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};
