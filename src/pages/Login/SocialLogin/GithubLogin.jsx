import { FaGithub } from "react-icons/fa";

const GithubLogin = () => {
  return (
    <div>
      <div
        //   onClick={handleGoogleSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-xl cursor-pointer">
        <FaGithub size={32} />
        <p className="font-bold">Continue with Github</p>
      </div>
    </div>
  );
};

export default GithubLogin;
