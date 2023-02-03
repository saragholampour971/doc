import cx from "classnames";
import type { ReactNode } from "react";
import React from "react";
import LoadingSpinner from "../loading/loading-spinner";

const colorClasses = {
  // normal buttons
  green: "font-semibold text-3.5 bg-submit-green text-white",
  blue: "text-white bg-blue-600 border-0",
  red: "text-white bg-red-light border-0",
  venetianRed: "text-white !bg-venetian-red border-0",
  gray: "text-white bg-gray-extra-light border-0",
  gray2: "text-white !bg-gray-medium border-0",
  gray3:
    "text-color-body !bg-gray-border border border-gray-extra-light !font-semibold",
  purple: "text-white bg-dark-purple border-0",
  skyBlue: " text-white bg-[#0086B3] border-0",
  greenLight:
    "text-green-cta bg-[#DFFFF2] font-semibold bg-light-green border-0",
  greenBlue: "!bg-green-blue text-white font-semibold border-0 ",

  // outlined buttons
  outlinedBlue:
    "text-color-blue-light bg-white border border-color-blue-light  border-solid",
  outlinedRed: "text-red-light bg-white border-red-light border border-solid",
  outlinedGray:
    "text-gray-medium bg-white border-gray-medium border border-solid",
  outlinedText:
    "text-white-medium font-semibold bg-white border-gray-medium border border-[#E6E6EB] border-solid",
  outlinedPurple:
    "text-dark-purple bg-white border border-dark-purple border-solid font-semibold",

  // text buttons
  textSlate: "border-0 text-slate-400 bg-transparent",
  textBlue: "border-0 text-color-blue-light bg-transparent font-bold text-xs",
  textRed: "!bg-transparent !border-0 !text-red-light font-semibold",

  // link buttons
  linkBlue:
    "border-0 underline underline-offset-[8px] text-color-blue-light hover:text-blue-800 visited:text-purple-600 ",
  linkBlue2:
    "border-0 text-color-blue-light hover:text-blue-800 visited:text-purple-600 font-semibold",
};

const sizeClasses = {
  xxs: "px-2 py-2 text-xs",
  xs: "px-5 py-2 text-[14px]",
  md: "px-7 py-2",
  lg: "px-7 py-3",
  xlg: "md:px-14 md:py-6 px-10 py-4",
};

const disableClasses = "text-white bg-[#E2E2E2] !cursor-not-allowed";

export type TailwindButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: keyof typeof colorClasses;
  size?: keyof typeof sizeClasses;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  as?: any;
  [key: string]: any;
};

const Button = (props: TailwindButtonProps) => {
  const {
    as,
    className,
    color = "blue",
    size = "md",
    disabled,
    children,
    leftIcon,
    rightIcon,
    loading = false,
    ...rest
  } = props;

  const Wrapper = as || "button";

  return (
    <Wrapper
      className={cx(
        className,
        "outline-0 rounded-lg cursor-pointer transition-all flex items-center justify-center gap-3",
        sizeClasses[size],
        !disabled && colorClasses[color],
        disabled && disableClasses
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {rightIcon}
          {children}
          {leftIcon}
        </>
      )}
    </Wrapper>
  );
};

export default Button;
