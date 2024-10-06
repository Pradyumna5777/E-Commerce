import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ItemContext from "./context/itemContext";
import SideDetails from "./SideDetails";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../util/firebase-config";
import HomeData from "./HomeData";

const Account = () => {
  const {
    userDetails,data, setUsersDetails,searchInput
    
  } = useContext(ItemContext);
  
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUsersDetails(docSnap.data());
        console.log(docSnap.data());
      }
    });
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />
      {
        
          searchInput.length === 0?
      <div className="flex gap-4 min-h-[100vh] mt-[9vh] w-[100vw] px-[5vw] py-[3vh]">
        <SideDetails/>
        <div className="px-2 py-4 gap-y-[4vh] border border-[#c0c0c0d7] bg-white w-[75vw] min-h-[100vh] flex flex-col">
          <div>
            <div className=" font-semibold py-2">Personal Information</div>

            <div className="flex gap-5">
              <input
                className="w-[25vw] capitalize h-[5vh] px-2 bg-[#9696962c]"
                placeholder="FirstName"
                value={userDetails.firstName}
                type="text"
                disabled
              />
              <input
                className="w-[25vw] capitalize h-[5vh] px-2 bg-[#9696962c]"
                placeholder="Lastname"
                value={userDetails.lastName}
                type="text"
                disabled
              />
            </div>
          </div>
          <div>
            <div className=" font-semibold py-2">Your Gender</div>
            <div className="flex items-center gap-4">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={userDetails.gender==="male"}
                  className="cursor-pointer"
                  disabled
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={userDetails.gender==="female"}
                  className="cursor-pointer"
                  disabled
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div>
            <div className=" font-semibold py-2">Email Address</div>

            <input
              className="w-[25vw] h-[5vh] px-2 cursor-pointer"
              placeholder="email"
              value={userDetails.email}
              type="text"
              disabled
            />
          </div>
          <div>
            <div className=" font-semibold py-2">Mobile Number</div>

            <input
              className="w-[25vw] h-[5vh] px-2 cursor-pointer"
              placeholder="mobile no"
              type="text"
              disabled
              value={userDetails.phoneNumber}
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="mt-[10vh] font-semibold py-2 text-white bg-red-500 px-4 rounded">
              Delete Account
            </button>
          </div>
        </div>
      </div>
      : data.length === 0?
      <div className="h-[100vh] w-[100vw] font-black text-2xl flex items-center justify-center">No Results</div>:
      <HomeData/>
      }

      <Footer />
    </>
  );
};

export default Account;
