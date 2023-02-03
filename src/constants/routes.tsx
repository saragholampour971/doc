import React, { ReactNode } from "react";
import LoginRegister from "../pages/login-register";
import Home from "../components/home";
const NotFoundPage = React.lazy(() => import("pages/404"));

export type RouteType = {
  path: string;
  element?: ReactNode;
};

export const routes: RouteType[] = [
  {
    path: "*",
    element: (
      <>
        {/*<Helmet>*/}
        <title>Page Not Found</title>
        {/*</Helmet>*/}
        <NotFoundPage />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        {/*<Helmet>*/}
        {/*</Helmet>*/}
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        {/*<Helmet>*/}
        <title>ورود / ثبت نام</title>
        {/*</Helmet>*/}
        <LoginRegister />
      </>
    ),
  },
];
