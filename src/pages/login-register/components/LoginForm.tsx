import { Formik, FormikHelpers } from "formik";
import FormikInput from "../../../components/formik/FomrikInput";
import BaseButton from "../../../components/base/BaseButton";
import FormikErrorMessage from "../../../components/base/FormikErrorMessage";
import { useState } from "react";
import { FormikLoginFormType } from "../type";
import validateMessages from "../../../components/formik/messages";
import Api from "../../../api/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isUserNew, setIsUserNew] = useState<boolean>(false);

  const navigate = useNavigate();

  const validate = (values: FormikLoginFormType) => {
    const required: (keyof typeof values)[] = [
      "password",
      "confirmPassword",
      "userName",
    ];
    let errors: any = {};
    console.log("aaaaaaaaaa", isUserNew);
    required.forEach((node) => {
      if (!values[node]) errors[node] = validateMessages.required;
    });
    if (!isUserNew) delete errors.confirmPassword;

    if (
      isUserNew &&
      values?.confirmPassword &&
      values.password !== values?.confirmPassword
    )
      errors = { ...errors, confirmPassword: "رمز ها با هم مطابقت ندارند" };
    console.log("errors", errors);
    return errors;
  };

  const onSubmit = (
    values: FormikLoginFormType,
    formikHelpers: FormikHelpers<FormikLoginFormType>
  ) => {
    Api.register
      .registerCreate({
        ConfirmPassword: values?.confirmPassword as string,
        Password: values?.password as string,
        Username: values?.userName as string,
      })
      .then((res) => {
        console.log("res", res);
        toast.success("ثبت نام با موفقیت انجام شد");
        formikHelpers.resetForm();
      })
      .catch((res) => toast.error(res.error));
  };

  const onLogin = (
    values: FormikLoginFormType,
    formikHelpers: FormikHelpers<FormikLoginFormType>
  ) => {
    Api.login
      .loginCreate({
        Password: values?.password as string,
        UserName: values?.userName,
      })
      .then(() => {
        formikHelpers.resetForm();
        navigate("/");
      })
      .catch((res) => toast.error(res.error));
  };

  return (
    <Formik<FormikLoginFormType>
      validateOnMount={false}
      validateOnBlur={false}
      initialValues={{ userName: "", password: "", confirmPassword: "" }}
      onSubmit={isUserNew ? onSubmit : onLogin}
      validate={validate}
    >
      {({ setFieldValue, values, handleSubmit, touched, errors }) => {
        console.log("touch", touched, errors);
        return (
          <div className={"w-full bg-white p-7 space-y-6 min-h-[400px]"}>
            <div>
              <FormikInput
                name={"userName"}
                textClassName={"outline-0"}
                inputClassName={"border-0 hover:border-0 border-b-7"}
                labelProps={{
                  variant: "salesLabel",
                  required: true,
                }}
                // autoFocus
                tabIndex={1}
                label={"نام کاربری"}
              />
              <FormikErrorMessage checkBlur={false} name={"userName"} />
            </div>
            <div>
              <FormikInput
                name={"password"}
                labelProps={{
                  variant: "salesLabel",
                  required: true,
                }}
                inputClassName={"border-0 hover:border-0 border-b-7"}
                type={"password"}
                tabIndex={2}
                textClassName={"outline-0"}
                label={"رمز"}
              />
              <FormikErrorMessage name={"password"} checkBlur={false} />
            </div>
            {isUserNew ? (
              <div>
                <FormikInput
                  name={"confirmPassword"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  inputClassName={"border-0 hover:border-0 border-b-7"}
                  type={"password"}
                  tabIndex={2}
                  textClassName={"outline-0"}
                  label={"تکرار رمز"}
                />
                <FormikErrorMessage name={"confirmPassword"} />
              </div>
            ) : null}
            <div className={" space-y-7 pt-5"}>
              <BaseButton
                type={"button"}
                color={"greenBlue"}
                className={"w-full"}
                onClick={() => {
                  console.log("hewe");
                  setIsUserNew(false);
                  handleSubmit();
                }}
              >
                ورود
              </BaseButton>{" "}
              <BaseButton
                type={"button"}
                color={"greenBlue"}
                className={"w-full"}
                onClick={() => {
                  if (!isUserNew) setIsUserNew(true);
                  else {
                    console.log("in else");
                    handleSubmit();
                  }
                }}
              >
                ثبت نام
              </BaseButton>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
