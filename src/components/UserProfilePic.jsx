import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ItemContext from "./context/itemContext";

const UserProfilePic = () => {

  const {
    
    setSearchInput
  } = useContext(ItemContext);

  const profileClick=()=>{
    setSearchInput('');
  }
  return (
    <Link to='/account'><div onClick={profileClick} className="bg-[#ffffffde] h-[5vh] w-[5vh] hover:bg-[#e6e6e6] overflow-hidden cursor-pointer text-black rounded-full">
      <img src="./images/dummyProfile.png" className="object-cover" />
    </div></Link>
  );
};

export default UserProfilePic;
