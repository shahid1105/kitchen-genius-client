import { Link } from "react-router-dom";
import logo from "../../../assets/images/chef-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li className="text-black gradient from-purple-400 to-indigo-400 ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-black">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="text-black">
        <Link to="/">Contact</Link>
      </li>
      <li className="text-black">
        <Link to="/">About</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed bg-base-400 bg-opacity-40 max-w-screen-xl text-white font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl italic">
            <img
              className="h-10 w-10 rounded-sm hidden md:block lg:block"
              src={logo}
              alt=""
            />
            <span className="text-blue-500 font-bold md:text-2xl lg:mt-2xl">
              Kitchen
            </span>{" "}
            <span className="text-red-500 font-bold md:text-2xl lg:mt-2xl">
              Genius
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end pr-4">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-active btn-ghost btn-sm text-black">
                Log Out
              </button>
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}>
                <div className="avatar">
                  <div className="w-10 ms-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-active btn-sm  btn-ghost">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
