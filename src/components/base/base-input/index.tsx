import classNames from "classnames";
import {
  DetailedHTMLProps,
  FC,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";

import BaseInputLeadingIcon from "./base-input-leading-icon";
import BaseInputTrailingIcon from "./base-input-trailing-icon";
import BaseLabel, { BaseLabelProps } from "../../BaseLabel";
import Input from "../input";

export type BaseInputPropType = {
  trailingIcon?: FC;
  leadingIcon?: FC;
  label?: string;
  textClassName?: string;
  inputClassName?: string;
  labelProps?: BaseLabelProps;
  trailingIconPosition?: "left" | "right";
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const BaseInput = forwardRef(
  (props: BaseInputPropType, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      className,
      leadingIcon,
      trailingIcon,
      inputClassName,
      labelProps,
      trailingIconPosition = "right",
      textClassName,
      disabled,
      ...restProps
    } = props;

    const getInputXPadding = () => {
      let className = "";
      if (leadingIcon) {
        className += "pl-6 ";
      }
      if (trailingIcon) {
        if (trailingIconPosition === "right") className += "pr-6 ";
        if (trailingIconPosition === "left") className += "pl-6 ";
      }
      return className;
    };

    return (
      <div className={className || ""}>
        {label && <BaseLabel {...labelProps}>{label}</BaseLabel>}
        <div
          className={classNames(
            "rounded-md px-3 py-2 shadow-sm relative",
            "border border-gray-light hover:border hover:border-gray-medium focus-within:border-gray-medium",
            inputClassName || "",
            disabled ? "cursor-not-allowed !bg-disable-gray" : null
          )}
        >
          <BaseInputLeadingIcon icon={leadingIcon} />

          <Input
            disabled={disabled}
            tabIndex={-1}
            autoComplete="off"
            type="text"
            className={`block w-full border-0 p-0 text-gray-900 placeholder-gray-500 sm:text-sm focus:ring-transparent  ${
              disabled ? "bg-transparent cursor-not-allowed" : null
            } ${getInputXPadding()} ${textClassName}`}
            {...restProps}
            ref={ref}
          />
          <BaseInputTrailingIcon
            icon={trailingIcon}
            position={trailingIconPosition}
          />
        </div>
      </div>
    );
  }
);

BaseInput.displayName = "BaseInput";

export default BaseInput;
