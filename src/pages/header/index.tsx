import bg from "./header.jpg";
import SearchBox from "./SearchBox";
import LoginRegister from "../login-register/components/LoginButton";

const Header = () => {
  return (
    <>
      <div className={"h-screen w-screen overflow-x-hidden"}>
        <div
          className={" absolute top-0 overflow-x-hidden "}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover,contain",
            display: "block",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {/*--------------text-------------*/}
          <div className={"w-full flex justify-end  !fixed pt-2 px-6"}>
            <LoginRegister />
          </div>
          {/*--------------------search*/}
          {/*<div className={" mt-4 inline bg-white flex h-[40px]"}>*/}
          {/*<DoctorTypAutocomplete />*/}
          <SearchBox />
          {/*</div>*/}
        </div>
      </div>
      <div>asdfsdf</div>
    </>
  );
};
export default Header;
