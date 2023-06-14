import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const GithubLogin = () => {
  const { githubSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGithubSignIn = () => {
    githubSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div
        onClick={handleGithubSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-xl cursor-pointer">
        <FaGithub size={32} />
        <p className="font-bold">Continue with Github</p>
      </div>
    </div>
  );
};

export default GithubLogin;
