import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import Chef from "../pages/Home/Chef/Chef";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "chef",
        element: <Chef></Chef>,
      },
      {
        path: "chefRecipes",
        element: (
          <ProtectedRoutes>
            <ChefRecipes></ChefRecipes>
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
