import LoginPage from "../page/Auth/LoginPage";
import RegisterPage from "../page/Auth/RegisterPage";
import PublicRouteGard from "./PublicRouteGard";

// create public router
const publicRouter = [
  {
    element: <PublicRouteGard />,
    children: [
      {
        element: <LoginPage />,
        path: "/login",
      },
      {
        element: <RegisterPage />,
        path: "/register",
      },
    ],
  },
];

// export router
export default publicRouter;
