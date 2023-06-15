import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import Chef from "../pages/Home/Chef/Chef";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ProtectedRoutes from "./ProtectedRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "chefRecipes/:id",
        element: (
          <ProtectedRoutes>
            <ChefRecipes></ChefRecipes>
          </ProtectedRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs-details/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
