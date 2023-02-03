import { Link } from "react-router-dom";

const LoginRegister = () => {
  return (
    <Link
      to={"/login"}
      className={
        "rounded-lg border border-5 text-white bg-dark-blue border-dark-blue flex items-center justify-center px-3 py-1 text-[14px] font-normal leading-7 hover:border-dark-blue hover:scale-105"
      }
    >
      ورود / ثبت نام
    </Link>
  );
};
export default LoginRegister;
