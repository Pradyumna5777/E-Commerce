import React, { useContext } from 'react'
import { getAuth, signOut } from "firebase/auth";
import UserProfilePic from "./UserProfilePic";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../util/firebase-config";
import ItemContext from './context/itemContext';
import TopBar from './TopBar';


const auth = getAuth(firebaseAppConfig);


const SideDetails = () => {



    const {
      setSavedSignupName,setSavedSignupName2,
      } = useContext(ItemContext);
    
      const navigate=useNavigate();

  return (
    <div className="px-2 py-4 gap-y-[4vh] border border-[#c0c0c0d7] bg-white w-[25vw] min-h-[100vh] flex flex-col">
          <TopBar/>
          <hr />
          <Link to="/orders"><button className="hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white flex items-center justify-between w-[100%] hover:font-black font-semibold px-4 py-2">
            My Orders<i className="ri-arrow-right-s-line"></i>
          </button></Link>
          <div className=" font-semibold px-4 py-2">
            <i className="ri-file-user-line"></i>
            <span className="ml-1 cursor-pointer">ACCOUNT SETTINGS</span>
            <div className="font-normal mt-[2vh] hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">Profile Information</div>
          </div>
          <div className=" font-semibold px-4 py-2 flex flex-col gap-y-[2vh]">
            <div>
              <i className="ri-folder-3-line"></i>
              <span className="ml-1 cursor-pointer">My Stuff</span>
            </div>

            <Link to='/myaddress'><div className="font-normal hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">My Addresses</div></Link>
            <Link to='/savedaddress'><div className="font-normal hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">Saved Addresses</div></Link>
            <Link to="/wishlist"><div className="font-normal hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white px-2 py-1 hover:font-black cursor-pointer">My WishList</div></Link>
          </div>
          <button onClick={() =>
            signOut(
              auth,
              setSavedSignupName2(''),
              setSavedSignupName(''),
              swal({
                title: "You are logged-out!",
                icon: "success",
              }),
              navigate('/login')
            )
          } className="font-semibold hover:font-black px-4 w-full text-start py-2 hover:text-lg hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white">
            <i className="ri-shut-down-line"></i>
            <span className="ml-1 hover:font-black">Log Out</span>
          </button>
        </div>
  )
}

export default SideDetails