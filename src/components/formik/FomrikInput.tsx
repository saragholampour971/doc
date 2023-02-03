import { useField } from "formik";
import React from "react";
import BaseInput, { BaseInputPropType } from "../base/base-input";

export type FormikInputType = BaseInputPropType & {
  name: string;
  value?: any;
};

function FormikInput(props: FormikInputType) {
  const { value, name, ...rest } = props;
  const [field] = useField({ name, value });

  return <BaseInput {...(rest as any)} {...field} />;
}

export default FormikInput;
