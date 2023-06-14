import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import GithubLogin from "./SocialLogin/GithubLogin";
import GoogleLogin from "./SocialLogin/GoogleLogin";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  const handleLogin = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <div className="hero min-h-screen bg-gradient-to-r from-purple-200 to-indigo-400 pt-16">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="login"
                  />
                </div>
              </form>
              <p className="text-center">
                <small>
                  New Here?{" "}
                  <Link className="font-bold text-orange-500" to="/signUp">
                    Create A New Account
                  </Link>
                </small>
              </p>
              <GoogleLogin></GoogleLogin>
              <GithubLogin></GithubLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
