import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../util/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";
import ItemContext from "./context/itemContext";

const auth = getAuth(firebaseAppConfig);

const Login = () => {

  const {
    allAddress,
    name, setName,
    
    setAppAdd,
   
  } = useContext(ItemContext);


  const [showPass, setShowPass] = useState("password");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
 
  
  
  const logSub = async (e) => {
    e.preventDefault();
    try {
      setLoader(false);
      await signInWithEmailAndPassword(auth, name.email, name.password);
      swal({
        title: "Log-in success",
        icon: "success",
      });
      
      navigate("/");
      // allAddress(JSON.parse(localStorage.getItem("address")))
      allAddress(setAppAdd)
    } catch (err) {
      setLoader(true);
      setError(err.message);
    }
  };
  const logChange = (e) => {
    const val = e.target.value;
    const names = e.target.name;
    setName({
      ...name,
      [names]: val,
    });
    setError(false);
  };

  return (
    <div className="bg-white top-0 font-[Cinzel] flex items-center justify-center relative">
      <img
        className="object-cover h-[100vh] w-[100vw]"
        src="./images/loginpageimg.jpg"
        alt=""
      />
      <form
        onSubmit={(e) => logSub(e)}
        className="animate__animated animate__fadeIn absolute backdrop-blur-md rounded shadow-black shadow-2xl gap-4 h-[90vh] w-[40vw] flex flex-col items-center justify-around "
      >
        <h1 className="font-bold text-[8vh] text-white">Sign-In</h1>

        <div className="flex flex-col items-center justify-start h-[50vh] gap-4 w-full relative">
          <input
            onChange={(e) => logChange(e)}
            name="email"
            type="text"
            placeholder="Email"
            required
            className="placeholder:text-white w-[30vw] bg-transparent py-3 px-4 border-2 text-xl rounded outline-none text-white"
          />
          <div className="relative">
            <input
              onChange={(e) => logChange(e)}
              name="password"
              type={showPass}
              placeholder="Password"
              required
              className="placeholder:text-white w-[30vw] bg-transparent py-3 text-xl px-4 border-2 rounded text-white outline-none"
            />
            <button
              onClick={() => {
                setShowPass(showPass === "password" ? "text" : "password");
              }}
              type="button"
              className="absolute right-[1vw] top-[2vh] border-none text-xl flex items-center justify-center"
            >
              {showPass === "password" ? (
                <i className="ri-eye-off-line text-white"></i>
              ) : (
                <i className="ri-eye-line text-white"></i>
              )}
            </button>
          </div>

          <div className="flex w-[30vw] items-center justify-between px-2">
            <p className="">
              new user?
              <Link to="/signup" className="text-blue-900 font-semibold ml-2">
                Signup
              </Link>
            </p>
            <p className="text-blue-900 font-semibold">
              <Link>Forgot Password?</Link>
            </p>
          </div>
          {error && (
            <div className="animate__animated animate__tada animate__faster bg-red-600 py-1 text-white flex w-[30vw] top-[21vh]  items-center justify-between px-2 absolute">
              <p>Wrong Credentials! {error}</p>
              <button onClick={() => setError(false)}>
                <i className="ri-close-large-line"></i>
              </button>
            </div>
          )}
          {loader ? (
            <button className="bg-yellow-300 text-white px-8 py-2 rounded text-xl font-bold mt-[8vh]">
              Login
            </button>
          ) : (
            <h1 className="font-semibold mt-[5vh] text-white">Loading...</h1>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
