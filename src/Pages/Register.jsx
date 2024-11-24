import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import UseAuth from "../Hooks/UseAuth";
const Register = () => {
  const { CreateUser } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {name,image, email, password } = data;
    console.log(email, password,name,image);
    if (password.length < 8) {
      return toast.error("use must 8 digit");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("You Must use an uppercase in the password");
    }

    if (!/[a-z]/.test(password)) {
      return toast.error("You Must use a Lowercase in the password");
    }
    // eslint-disable-next-line no-useless-escape
    if (/[@!#$%\^&\*]/.test(password)) {
      return toast.error("You Must use a Lowercase in the password");
    }

    CreateUser(email, password)
    .then((res) => {
      console.log(res)
      toast.success("Registration Successful!");
      navigate(from || "/");
    })
    .catch((error) => {
      toast.error(error?.message || "Registration failed.");
    });
  
  };

  return (
    <div>
      {/* <Helmet>
        <title>SmithTaylor register</title>
      </Helmet> */}
      <section className="relative py-20 lg:py-10 overflow-hidden ">
        <div className="container px-4 mx-auto ">
          <div className="max-w-7xl mx-auto ">
            <div className="flex flex-wrap -mx-4 xl:items-center">
              <div className="w-full lg:w-1/2 xl:w-3/5 px-4 order-last lg:order-first">
                <div className="relative max-w-xl mx-auto lg:mx-0 lg:max-w-3xl h-full">
                  <img
                    className="block w-full h-166 lg:h-full object-cover rounded-3xl"
                    src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
                <div className="max-w-md lg:py-20 mx-auto lg:mr-0">
                  <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">
                    Sign up to your account
                  </h3>
                  <p className="text-lg text-gray-500 mb-10">
                    Greetings on your return! We kindly request you to enter
                    your details.
                  </p>
                  <div className="flex flex-wrap mb-6 items-center -mx-2 justify-center">
                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                      {/* <SocailLink></SocailLink> */}
                    </div>
                  </div>
                  <div className="flex mb-6 items-center">
                    <div className="w-full h-px bg-gray-300"></div>
                    <span className="mx-4 text-sm font-semibold text-gray-500">
                      Or
                    </span>
                    <div className="w-full h-px bg-gray-300"></div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                      <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                        Name
                      </label>
                      <input
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="text"
                        name="name"
                        placeholder="Stefano Bojarski"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm font-light">
                          Name is required
                        </p>
                      )}
                    </div>
                    <div className="mb-6">
                      <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                        Email
                      </label>
                      <input
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="email"
                        placeholder="pat@saturn.dev"
                        name="email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm font-light">
                          Email is required
                        </p>
                      )}
                    </div>
                    <div className="mb-6">
                      <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                        Photo Url
                      </label>
                      <input
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="text"
                        placeholder="photo url"
                        name="image"
                        {...register("image", { required: true })}
                      />
                      {errors.image && (
                        <p className="text-red-500 text-sm font-light">
                          Image is required
                        </p>
                      )}
                    </div>
                    <div className="mb-6">
                      <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          type="password"
                          placeholder="min 12 cars"
                          name="password"
                          {...register("password", { required: true })}
                        />
                        {errors.password && (
                          <p className="text-red-500 text-sm font-light">
                            Password is required
                          </p>
                        )}
                        <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                          <img
                            src="saturn-assets/images/sign-up/icon-eye.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex mb-6 items-center">
                      <input type="checkbox" value="" id="" />
                      <label className="ml-2 text-xs text-gray-800">
                        Remember me
                      </label>
                    </div>
                    <button
                      className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                      type="submit"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Register Account</span>
                    </button>
                    <span className="text-xs font-semibold text-gray-900">
                      <span>Already have an account?</span>
                      <a
                        className="inline-block ml-1 text-orange-900 hover:text-orange-700"
                        href="#"
                      >
                        <Link to="/login">Login</Link>
                      </a>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Register;
