import classNames from "classnames";
import React, { FC } from "react";
import BaseTypography, { VariantsType } from "./base/BaseTypography";

export type BaseLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  required?: boolean;
  variant?: VariantsType;
};

const BaseLabel: FC<BaseLabelProps> = (props: BaseLabelProps) => {
  const { children, className, required, ...rest } = props;
  return (
    <BaseTypography
      variant={"label"}
      as="label"
      className={classNames("", className)}
      {...rest}
    >
      {children}
      {required && <span className="text-red-dark">*</span>}
    </BaseTypography>
  );
};

export default BaseLabel;
