import React from "react";
import Home from "./components/home";
// import Login from "./components/login";

const childrenClassName =
  "max-w-[1920px] min-w-[1280] mx-auto lg:px-12 flex flex-col";
function App() {
  return (
    <div className=" mx-auto ">
      {/*<Login/>*/}
      <Home />
      <div className={childrenClassName}></div>
    </div>
  );
}

export default App;
