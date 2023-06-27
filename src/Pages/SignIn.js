import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row h-[100vh]">
      <div className="w-[100%] md:w-[40%] bg-black text-white flex justify-center items-center">
        <h1 className="text-5xl font-bold p-2">Board.</h1>
      </div>
      <div className="w-[100%] h-[100%] md:w-[60%] bg-[#F5F5F5] flex flex-col justify-center items-center">
        <div className="w-[70%] sm:w-[60%] md:w-[70%] lg:w-[52%] xl:w-[45%] h-[70%] flex flex-col justify-between ">
          <div>
            <h2 className="text-3xl font-semibold">Sign In</h2>
            <p className="text-sm font-semibold">Sign in to your account</p>
          </div>
          <div className=" flex justify-between text-[#999999]">
            <button className="py-1 px-3 rounded-xl bg-white flex justify-center items-center text-sm">
              <FcGoogle className="inline-block pr-2 text-2xl" />
              Sign in with Google
            </button>
            <button className="py-1 px-3 rounded-xl bg-white flex justify-center items-center text-sm">
              <BsApple className="inline-block pr-2 text-2xl" />
              Sign in with Apple
            </button>
          </div>
          <form className="bg-white rounded-xl flex flex-col justify-between p-7 h-[65%]">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="email"
              className="bg-gray-200 p-2 rounded-lg focus:outline-none"
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="bg-gray-200 p-2 rounded-lg focus:outline-none"
            />
            <a className="text-[#346BD4]">Forgot password?</a>
            <button className="p-2 bg-black text-white rounded-xl">
              Sign in
            </button>
          </form>
          <p className="self-center">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
