import React from "react";
import { Link } from "react-router-dom";

const SignupBtn = () => {
  return (
    <Link to="/signup">
      <button className="bg-[#121111] hover:bg-[#1b1b1be8] md:py-[1vh] md:px-[2vh] text-white px-1 rounded ">
        <i className="ri-user-line"></i>Signup
      </button>
    </Link>
  );
};

export default SignupBtn;
