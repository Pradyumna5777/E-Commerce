import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig, { db } from "../util/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "animate.css";
import swal from "sweetalert";
import ItemContext from "./context/itemContext";
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseAppConfig);

const Signup = () => {
  const { signupName, setSignupName } = useContext(ItemContext);

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("password");

  const SignUp = async (e) => {
    try {
      e.preventDefault();
      await createUserWithEmailAndPassword(
        auth,
        signupName.email,
        signupName.password
      );
      swal({
        title: "Sign-up success",
        icon: "success",
      });

      navigate("/");

      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: signupName.firstname,
          lastName: signupName.lastname,
          phoneNumber: signupName.phonenumber,
          gender: signupName.gender,
        });
      }

      // localStorage.setItem('signupFirstName', JSON.stringify(signupName.firstname));
      // localStorage.setItem('signupLastName', JSON.stringify(signupName.lastname));
    } catch (err) {
      setError(err.message);
    }
  };

  const sinChange = (e) => {
    const val = e.target.value;
    const names = e.target.name;
    setSignupName({
      ...signupName,
      [names]: val,
    });
    setError(false);
  };
  return (
    <div className="font-[Cinzel] flex items-center justify-center relative">
      <img
        className="object-cover h-[100vh] w-[100vw]"
        src="./images/signuppageimg.jpg"
        alt=""
      />
      <form
        onSubmit={(e) => SignUp(e)}
        className="animate__animated animate__fadeIn absolute backdrop-blur-[1vh] rounded shadow-2xl gap-10 h-[90vh] w-[80vw] flex flex-col items-center justify-around "
      >
        <h1 className="font-bold text-[8vh] text-white">Sign-Up</h1>

        <div className="grid grid-cols-2 gap-8 relative">
          <input
            onChange={(e) => sinChange(e)}
            name="firstname"
            type="text"
            placeholder="First Name"
            required={true}
            className="placeholder:text-white w-[30vw] bg-transparent py-3 px-4 border-2 text-xl rounded outline-none text-white"
          />
          <input
            onChange={(e) => sinChange(e)}
            name="lastname"
            type="text"
            placeholder="Last Name"
            required={true}
            className="placeholder:text-white w-[30vw] bg-transparent py-3 text-xl px-4 border-2 rounded text-white outline-none"
          />
          <input
            onChange={(e) => sinChange(e)}
            name="phonenumber"
            type="number"
            placeholder="Phone Number"
            required={true}
            className="placeholder:text-white w-[30vw] bg-transparent py-3 px-4 border-2 text-xl rounded outline-none text-white"
          />
          <div className="grid grid-cols-2 gap-8 relative">
            <div className="col-span-2">
              <label className="block text-white text-xl mb-2">Gender:</label>
              <div className="flex items-center space-x-4">
                <label className="font-black">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => sinChange(e)}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="font-black">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => sinChange(e)}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          <input
            onChange={(e) => sinChange(e)}
            name="email"
            type="text"
            placeholder="Email"
            required={true}
            className="placeholder:text-white w-[30vw] bg-transparent py-3 px-4 border-2 text-xl rounded outline-none text-white"
          />
          <div className="relative">
            <input
              onChange={(e) => sinChange(e)}
              name="password"
              type={showPassword}
              placeholder="Password"
              required={true}
              className="placeholder:text-white w-[30vw] bg-transparent py-3 text-xl px-4 border-2 rounded text-white outline-none"
            />

            <button
              onClick={() => {
                setShowPassword(
                  showPassword === "password" ? "text" : "password"
                );
              }}
              type="button"
              className="absolute right-[1vw] top-[2vh] border-none text-xl flex items-center justify-center"
            >
              {showPassword === "password" ? (
                <i className="ri-eye-off-line text-white"></i>
              ) : (
                <i className="ri-eye-line text-white"></i>
              )}
            </button>
          </div>

          <p className="flex w-[30vw] top-[31vh] left-[0vw] items-center justify-between px-2 absolute">
            Already have an account?
            <Link to="/login" className="text-blue-900 font-semibold ml-2">
              Signin
            </Link>
          </p>
          {error && (
            <div className="animate__animated animate__tada animate__faster bg-red-600 py-1 text-white flex w-[30vw] top-[20vh] right-[0vw] items-center justify-between px-2 absolute">
              <p>Wrong Credentials! {error}</p>
              <button onClick={() => setError(false)}>
                <i class="ri-close-large-line"></i>
              </button>
            </div>
          )}
        </div>
        <button className="bg-yellow-300 text-white px-8 py-2 rounded text-xl font-bold ">
          Signup
        </button>
      </form>
    </div>
  );
};
export default Signup;
