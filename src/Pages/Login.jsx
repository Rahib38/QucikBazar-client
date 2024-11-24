// import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
// import SocailLink from "./SocailLink";

const Login = () => {
  const { Login, } = UseAuth();
     const navigate = useNavigate();
     const location = useLocation();
     const from = location?.state || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    console.log(email, password);

    Login(email, password)
      .then((result) => {
        navigate(from)
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center items-center container mx-auto min-h-screen">
      {/* <Helmet>
        <title>SmithTaylor login</title>
      </Helmet> */}
      <section className="flex box-border justify-center items-center">
        <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              If you already a member, easily log in now.
            </p>

            <form onSubmit={handleSignIn} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  id="togglePassword"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                  id="mama"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                </svg>
              </div>
              <button
                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="mt-6  items-center text-gray-100">
              <hr className="border-gray-300" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-300" />
            </div>
            {/* <SocailLink></SocailLink> */}

            <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
              Forget password?
            </div>

            <div className="mt-4 text-sm flex justify-between items-center container-mr">
              <p className="mr-3 md:mr-0 ">If you don`t have an account..</p>

              <Link
                to="/register"
                className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl max-h-[1600px]"
              src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
            />
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Login;