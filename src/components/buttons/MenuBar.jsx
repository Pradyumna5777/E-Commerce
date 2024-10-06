import React, { useContext, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import swal from "sweetalert";
import ItemContext from "../context/itemContext";
import firebaseAppConfig from "../../util/firebase-config";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(firebaseAppConfig);

const MenuBar = () => {
  const {showMenu, setShowMenu } = useContext(ItemContext);


  const navigate=useNavigate();

  useEffect(() => {
    setShowMenu("-35vh");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container')) {
        setShowMenu("-35vh");
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 



  const menuClick = () => {
    if (showMenu == "-35vh") {
      setShowMenu("0");
    } else {
      setShowMenu("-35vh");
    }
  };
  const menuHider=()=>{
    setShowMenu("-35vh");
  }

  return (
    <div className="menu-container relative text-black">
      <button
        onClick={menuClick}
        className="bg-[#FB641B] hover:bg-[#fb661bd6]  md:py-[1vh] md:px-[1.8vh] text-white px-1 rounded"
      >
        <i className="ri-menu-line"></i>
      </button>
      <div
        className="flex flex-col justify-center rounded overflow-hidden items-center gap-[0.3vh] absolute h-[22.5vh] w-[15vw] right-0 top-10 bg-white transition ease-in-out duration-[0.1s] shadow-2xl "
        style={{ transform: `translateY(${showMenu})` }}
      >
        <Link to="/account" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg text-base hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold">Account</div>
        </button></Link>
        <Link to="/wishlist" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg text-base hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold">Wishlist</div>
        </button></Link>
        <Link to="/orders" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg text-base hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold">Orders</div>
        </button></Link>
        <Link to="/contactus" className="w-[100%]"><button onClick={menuHider} className="hover:text-lg text-base hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center">
          <div className="w-full font-semibold">Contact-Us</div>
        </button></Link>
        <button
          onClick={() =>
            signOut(
              auth,
              navigate('/'),
              swal({
                title: "You are logged-out!",
                icon: "success",
              })
            )
          }
          className="hover:text-lg text-base font-semibold hover:transition ease-in-out duration-[0.1s] hover:bg-[#0F5AFC] hover:text-white py-[0.6vh] w-full text-center"
        >
          <div className="hover:text-lg font-semibold text-base">
            Log-Out <i className="ri-logout-circle-r-line"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
