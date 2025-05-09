import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKEND_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = async () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Sign In /Sign Up logic
    if (isSignInForm) {
      // Sign Up Logic
      try {
        const response = await fetch(`${BACKEND_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: name.current.value,
            email: email.current.value,
            password: password.current.value,
          }),
        });
        const data = await response.json();
        if (!response.ok) {
          setErrorMessage(data.message);
        } else {
          dispatch(
            addUser({
              userId: data.user.id,
              userName: data.user.userName,
              email: data.user.email,
              token: data.token,
              photoURL:USER_AVATAR
            })
          );
        }
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message);
      }
    } else {
      // Sign In Logic
      try {
        const response = await fetch(`${BACKEND_URL}/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          setErrorMessage(data.message);
        } else {
          dispatch(
            addUser({
              userId: data.user.id,
              userName: data.user.userName,
              email: data.user.email,
              token: data.token,
              photoURL:USER_AVATAR
            })
          );
        }
      } catch (error) {
        console.log(error.message);
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg"
          alt="bac"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mt-36 mx-auto right-0 left-0 w-3/12 p-12 bg-black opacity-80 text-white rounded-lg "
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold py-2 text-lg">{errorMessage}</p>
        <button
          className="py-3 px-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
