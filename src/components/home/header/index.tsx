import bg from "./header.jpg";
import City from "./city";

const Header = () => {
  return (
    <div className={"w-screen h-screen"}>
      <div
        className={" sticky top-0 overflow-x-hidden flex  justify-center"}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
        }}
      >
        {/*--------------text-------------*/}

        {/*--------------------search*/}
        {/*<div className={" mt-4 inline bg-white flex h-[40px]"}>*/}
        {/*<DoctorTypAutocomplete />*/}
        <City />
        {/*</div>*/}
      </div>
    </div>
  );
};
export default Header;
