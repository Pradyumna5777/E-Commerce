import React from "react";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link to="/login">
      <button
        className="bg-[#121111] hover:bg-[#1b1b1be8] md:py-[1vh] md:px-[2vh] text-white px-1 rounded "
      >
        <i className="ri-login-circle-line"></i>Login
      </button>
    </Link>
  );
};

export default LoginBtn;
