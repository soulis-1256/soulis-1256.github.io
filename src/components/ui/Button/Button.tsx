import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const {
    variant = "primary",
    size = "medium",
    className = "",
    children,
    type = "button",
    disabled = false,
    ...rest
  } = props;

  const classes = ["btn", `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
});

export default Button;
