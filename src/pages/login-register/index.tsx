import bg from "./assets/bg.jpg";
import BaseRadioButton from "../../components/base/base-radio-button";
import { useState } from "react";
import { UserType } from "./type";
import BaseLabel from "../../components/BaseLabel";
import LoginForm from "./components/LoginForm";

const options: { label: string; value: UserType }[] = [
  { label: "بیمار", value: UserType.PATIENT },
  { label: "دکتر", value: UserType.DOCTOR },
];

const LoginRegister = () => {
  const [userType, setUserType] = useState<UserType>(UserType.PATIENT);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          overflow: "hidden",
          // backgroundColor: "gold",
          width: "100%",
          height: "100%",
          // display: "block",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "fixed",
        }}
      >
        <div className={"w-1/2 h-full fixed bg-white left-0 flex items-center"}>
          <div
            className={
              "relative w-1/2 max-w-[450px] relative space-y-3 text-slate-600 mx-auto bg-white border rounded-5 p-3 shadow-lg divide-y-1"
            }
            style={{ boxShadow: "5px #88BDB5" }}
          >
            <div
              className={
                "!flex justify-between inline bg-white rounded-lg py-2 px-6 !w-full "
              }
            >
              {options?.map((node) => {
                return (
                  <div className={"flex items-center justify-end gap-x-2 "}>
                    <BaseRadioButton
                      className={"w-3 h-3"}
                      color={"green"}
                      onClick={() => setUserType(node.value)}
                      value={node.value}
                      checked={userType === node.value}
                    />
                    <BaseLabel className={"text-[15px] leading-8"}>
                      {node?.label}
                    </BaseLabel>
                  </div>
                );
              })}
            </div>

            {userType === UserType.PATIENT ? <LoginForm /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginRegister;
