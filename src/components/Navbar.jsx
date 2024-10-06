import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../util/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MenuBar from "./buttons/MenuBar";
import CartBtn from "./buttons/CartBtn";
import ItemContext from "./context/itemContext";
import LoginBtn from "./buttons/LoginBtn";
import SignupBtn from "./buttons/SignupBtn";
import UserProfilePic from "./UserProfilePic";

const auth = getAuth(firebaseAppConfig);
const Navbar = () => {
  const {
    setData,
    setHomeData,
    apiFourth,
    setApiFashion,
    apiThirdData,
    apiFashion,
    apiThirdDataClone,
    setApiThirdData,
    originalCards,
    allCards,
    setAllCards,
    searchInput,
    setSearchInput,
    users,
    setUsers,
  } = useContext(ItemContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUsers(user) : setUsers(false);
    });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    if (searchInput !== "") {
      const filteredInput = allCards.filter(
        (items) =>
          items.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          items.category.toLowerCase().includes(searchInput.toLowerCase())
      );
      const filteredApiThirdData = apiThirdData.filter((val) => {
        const { brand, category, title, model } = val;
        const lowerSearchInput = searchInput.toLowerCase();
        return (
          brand.toLowerCase().includes(lowerSearchInput) ||
          category.toLowerCase().includes(lowerSearchInput) ||
          title.toLowerCase().includes(lowerSearchInput) ||
          model.toLowerCase().includes(lowerSearchInput)
        );
      });
      const filteredFashionInput = apiFashion.filter((items) => {
        const lowerSearchInput = searchInput.toLowerCase();
        const itemTitle = items.title.toLowerCase();
        const itemCategory = items.category.toLowerCase();

        return (
          itemCategory.includes(lowerSearchInput) ||
          itemTitle.includes(lowerSearchInput)
        );
      });

      const combinedResults = [
        ...filteredInput,
        ...filteredApiThirdData,
        ...filteredFashionInput,
      ];

      const value = combinedResults.filter(
        (val) =>
          val.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          val.category.toLowerCase().includes(searchInput.toLowerCase()) ||
          val.model.toLowerCase().includes(searchInput.toLowerCase())
      );
      // console.log("value", value);
      setData(value);
    } else if (searchInput.length === 0) {
      setApiThirdData(apiThirdDataClone);
      setAllCards(originalCards);
      setApiFashion(apiFourth);
      setHomeData("");
    }
  };
  // console.log("searchinput",searchInput);
  const navigate = useNavigate();

  const clickHome = () => {
    navigate("/");
    setSearchInput("");
  };
  const electronicClick = () => {
    setSearchInput("");
    setApiThirdData(apiThirdDataClone);
  };

  const fashionClick = () => {
    setSearchInput("");
    setApiFashion(apiFourth);
  };
  const findMoreClick = () => {
    setSearchInput("");
    setAllCards(originalCards);
  };

  return (
    <div className="font-[Cinzel] bg-[#0F5AFC] flex items-center justify-between py-3 px-5 drop-shadow-xl text-white fixed top-0 w-full z-[2]">
      <img
        onClick={clickHome}
        className="h-[6vh] w-[auto] rounded"
        src="./images/Designer.png"
        alt="logo"
      />
      <div className="relative">
        <div className="flex items-center justify-between text-lg w-[70vw]">
          <div onChange={formSubmit}>
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              className="border-[#7575752f] border rounded-l w-[25vw] bg-[#fff] px-[1vw] py-[.4vh] text-black outline-none"
              placeholder="Search products..."
              type="text"
            />
            <button
              type="button"
              className=" text-black px-[1vh] py-[.4vh] outline-none rounded-r hover:text-white border-[#7575752f] border bg-[#fff] hover:bg-[#1b1b1be8]"
            >
              <i className="ri-search-line"></i>
            </button>
          </div>
          <div>
            <Link
              onClick={clickHome}
              to="/"
              className="cursor-pointer text-base text-[#fff] font-extrabold"
            >
              Home
            </Link>
          </div>
          <button onClick={electronicClick}>
            <Link
              to="/electronics"
              className="cursor-pointer text-base text-[#fff] font-extrabold"
            >
              Electronics
            </Link>
          </button>
          <button onClick={fashionClick}>
            <Link
              to="/fashion"
              className="cursor-pointer text-base text-[#fff] font-extrabold"
            >
              Fashion
            </Link>
          </button>
          <button onClick={findMoreClick}>
            <Link
              to="/findmore"
              className="cursor-pointer text-base text-[#fff] font-extrabold"
            >
              Find More
            </Link>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {users ? (
          <>
            <CartBtn />
            <MenuBar />
            <UserProfilePic />
          </>
        ) : (
          <>
            <LoginBtn />
            <SignupBtn />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
