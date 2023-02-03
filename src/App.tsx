import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          fontFamily: "dana, Nova, system-ui, sans-serif",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      />
      <React.Suspense
        fallback={
          <>
            <div className="flex">
              <div className="m-auto">loading</div>
            </div>
          </>
        }
      >
        <div className=" mx-auto !overflow-x-hidden h-screen w-screen overflow-x-hidden">
          <Routes>
            {routes.map((node) => (
              <Route key={node.path} {...node} />
            ))}
          </Routes>
        </div>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
