import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailCard from "./components/DetailCard";
import CheckOutTem from "./components/CheckOutTem";
import Cart from "./components/Cart";
import ItemContextProvider from "./components/context/ItemContextProvider";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Protector from "./components/Protector";
import Electronics from "./components/Electronics";
import Fashion from "./components/Fashion";
import NotFoundPage from "./components/NotFoundPage";
import Account from "./components/Account";
import ContactUs from "./components/ContactUs";
import Orders from "./components/Orders";
import MyAddress from "./components/MyAddress";
import SavedAddress from "./components/SavedAddress";
import FindMore from "./components/FindMore";
import AboutProduct from "./components/AboutProduct";
import AddressComp from "./components/AddressComp";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import SearchBrand from "./components/SearchBrand";
import HomeFilteredData from "./components/HomeFilteredData";
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";
import { useEffect } from "react";
import WishList from "./components/WishList";
import WishListBtn from "./components/buttons/WishListBtn";
import SimilarItems from "./components/SimilarItems";
import FilteredData from "./components/FilteredData";
import HomeData from "./components/HomeData";
import AllSimilarProducts from "./components/AllSimilarProducts";
import ConfirmDetails from "./components/ConfirmDetails";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  
  return (
    
    <ItemContextProvider>
      <BrowserRouter>
      {
        loading?<SplashScreen/>:
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Protector />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Route>
          <Route path="/detailcard" element={<DetailCard />} />
          {/* <Route path="/booknowtemp" element={<BookNowTemp />} /> */}
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/wishlistBtn" element={<WishListBtn />} />
          <Route path="/checkouttem" element={<CheckOutTem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/account" element={<Account />}/>
            <Route path="/savedaddress" element={<SavedAddress />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/myaddress" element={<MyAddress />} />
          <Route path="/findmore" element={<FindMore />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="aboutproduct" element={<AboutProduct />} />
          <Route path="addresscomp" element={<AddressComp />} />
          <Route path="topbar" element={<TopBar />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="searchbrand" element={<SearchBrand />} />
          <Route path="homefiltereddata" element={<HomeFilteredData />} />
          <Route path="splashscreen" element={<SplashScreen />} />
          <Route path="similaritems" element={<SimilarItems />} />
          <Route path="filtereddata" element={<FilteredData />} />
          <Route path="homedata" element={<HomeData />} />
          <Route path="allsimilarproducts" element={<AllSimilarProducts />} />
          <Route path="confirmdetails" element={<ConfirmDetails />} />
        </Routes>
  }
      </BrowserRouter>
    </ItemContextProvider>
  );
}

export default App;
