import React, { useEffect, useState } from "react";
import ItemContext from "./itemContext";

const ItemContextProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState("0");
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const [allCards, setAllCards] = useState([]);
  const [apiThirdData, setApiThirdData] = useState([]);
  const [apiThirdDataClone, setApiThirdDataClone] = useState([]);
  const [bookedItems, setBookedItems] = useState([]);
  const [values, setValues] = useState(1000);
  const [searchVal, setSearchVal] = useState("");
  const [priceVal, setPriceVal] = useState(1000);
  const [originalCards, setOriginalCards] = useState([]);
  const [state, setState] = useState(null);
  const [users, setUsers] = useState(false);
  const [showMenu, setShowMenu] = useState("-35vh");
  const [filterToggle, setFilterToggle] = useState("none");
  const [showFilter, setShowFilter] = useState("repeat(4, 1fr)");
  const [gap, setGap] = useState("2vw");
  const [margin, setMargin] = useState();
  const [searchInput, setSearchInput] = useState([]);
  const [apiSecondData, setApiSecondData] = useState([]);
  const [apiFashion, setApiFashion] = useState([]);
  const [apiFourth, setApiFourth] = useState([]);
  const [wishItem, setWishItem] = useState([]);
  const [myAddress, setMyAddress] = useState([]);
  const [allAddress, setAllAddress] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [signupName, setSignupName] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    gender: "",
    email: "",
    password: "",
  });
  const [name, setName] = useState({
    email: "",
    password: "",
  });
  const [savedSignupName, setSavedSignupName] = useState();
  const [savedSignupName2, setSavedSignupName2] = useState();
  const [userDetails, setUsersDetails] = useState({});
  const [cartNumber, setCartNumber] = useState("0");
  const [filteredData, setFilteredData] = useState([]);
  const [currentAddress, setCurrentAddress] = useState({});
  const addLocal = JSON.parse(localStorage.getItem("address"));
  const [appAdd, setAppAdd] = useState(addLocal);
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [res, setRes] = useState();
  const [checkOutItem, setChekOutItem] = useState([]);
  const [itemPrice, setItemPrice] = useState();

  const currentDateTime = new Date().toLocaleString();
    // const updatedCart = cart.map(item => ({ ...item, bookingTime: currentDateTime }));

  const AddCartBtn = (e) => {
    if (users) {
      setCart([{ ...e, quantity: 1, bookingTime: currentDateTime }, ...cart]);
      setChekOutItem([...cart, { ...e, quantity: 1 }]);
      setCartNumber(cart.length + 1);
      swal("Added to cart!", "😍");
    } else if (!users) {
      swal("Login First!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //findmore
        const response = await fetch("https://dummyjson.com/products?limit=32&_page=1");
        const jsonData = await response.json();
        const newData = jsonData.products;
        setAllCards(newData);
        setOriginalCards(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataApiThird = async () => {
      try {
        //electronics
        const response = await fetch(
          "https://fakestoreapi.in/api/products?limit=32"
        );
        const jsonData = await response.json();
        const newData = jsonData.products;
        setApiThirdData(newData);
        setApiThirdDataClone(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataApiThird();
  }, []);

  useEffect(() => {
    const fetchDataApiFashion = async () => {
      try {
        //fashion
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=32"
        );
        const jsonData = await response.json();
        const newData = jsonData;
        setApiFashion(newData);
        setApiFourth(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataApiFashion();
  }, []);

  const [obj, setObj] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    images: "",
    dimensions: "",
    rating: "",
    returnPolicy: "",
    shippingInformation: "",
    brand: "",
    category: "",
  });

  const calculateTotalPrice = () => {
    const totalPriceData = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setItemPrice(totalPriceData);
    return totalPriceData;
  };

  const submitForm = (e) => {
    e.preventDefault();
    swal("Order Booked!", "😄", "success");
    const currentDateTime = new Date().toLocaleString();
    const updatedCart = cart.map((item) => ({
      ...item,
      bookingTime: currentDateTime,
    }));
    setBookedItems([...bookedItems, ...updatedCart]);
    setCart([]);
  };

  const bookBtn = (e, index) => {
    const {
      title,
      price,
      returnPolicy,
      rating,
      description,
      dimensions,
      brand,
      shippingInformation,
      images,
      category,
      image,
      quantity,
      bookingTime,
      model,
    } = e;
    setObj({
      id: index,
      title,
      bookingTime,
      category,
      brand,
      dimensions,
      returnPolicy,
      rating,
      price,
      model,
      images,
      quantity,
      image,
      description,
      shippingInformation,
    });

    setCart([...cart, { ...e, quantity: 1 }]);
    setObj({...e,bookingTime:currentDateTime})
    setHomeData("");
    setSearchInput("");
    setChekOutItem([...cart, { ...e, quantity: 1 }]);
    setCartNumber(cart.length + 1);
  };
  

  const noUsers = () => {
    if (!users) {
      swal("Login First!");
    }
  };

  const filteredInput = allCards.filter(
    (items) => items.title.toLowerCase() || items.category.toLowerCase()
  );
  const filteredApiThirdData = apiThirdData.filter((val) => {
    const { brand, category, title, model } = val;
    return (
      brand.toLowerCase() ||
      category.toLowerCase() ||
      title.toLowerCase() ||
      model.toLowerCase()
    );
  });
  const filteredFashionInput = apiFashion.filter((items) => {
    const itemTitle = items.title.toLowerCase();
    const itemCategory = items.category.toLowerCase();

    return itemCategory || itemTitle;
  });

  const combinedResults = [
    ...filteredInput,
    ...filteredApiThirdData,
    ...filteredFashionInput,
  ];

  const value = combinedResults.filter(
    (val) =>
      val.title.toLowerCase() ||
      val.category.toLowerCase() ||
      val.model.toLowerCase()
  );

  const similarItems = value.filter((val) => {
    if (val.category.includes(obj.category)) {
      return val;
    }
  });

  const toggleHeart = (e) => {
    if (!wishItem.includes(e)) {
      swal("Added to Wishlist!", "❤️");
      setWishItem([...wishItem, e]);
    } else {
      const updatedWishItem = wishItem.filter((item) => item !== e);
      swal("Removed from Wishlist!", "😞");
      setWishItem(updatedWishItem);
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <=760);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ItemContext.Provider
      value={{
        isMobile, setIsMobile,
        currentDateTime,
        itemPrice,
        setItemPrice,
        checkOutItem,
        setChekOutItem,
        res,
        setRes,
        orders,
        setOrders,
        combinedResults,
        data,
        setData,
        toggleHeart,
        wishItem,
        setWishItem,
        currentAddress,
        setCurrentAddress,
        similarItems,
        filteredData,
        setFilteredData,
        cartNumber,
        setCartNumber,
        name,
        userDetails,
        setUsersDetails,
        setName,
        noUsers,
        value,
        setAppAdd,
        bookBtn,
        homeData,
        setHomeData,
        apiFourth,
        setApiFourth,
        apiThirdDataClone,
        apiFashion,
        setApiFashion,
        AddCartBtn,
        apiThirdData,
        setApiThirdData,
        allAddress,
        setAllAddress,
        myAddress,
        setMyAddress,
        savedSignupName,
        savedSignupName2,
        setSavedSignupName2,
        setSavedSignupName,
        signupName,
        setSignupName,
        apiSecondData,
        setApiSecondData,
        searchInput,
        setSearchInput,
        showFilter,
        setShowFilter,
        gap,
        setGap,
        margin,
        setMargin,
        filterToggle,
        setFilterToggle,
        users,
        setUsers,
        showMenu,
        setShowMenu,
        state,
        setState,
        submitForm,
        originalCards,
        setOriginalCards,
        priceVal,
        setPriceVal,
        searchVal,
        setSearchVal,
        values,
        setValues,
        calculateTotalPrice,
        obj,
        setObj,
        bookedItems,
        setBookedItems,
        allCards,
        setAllCards,
        count,
        setCount,
        cart,
        setCart,
        toggleCart,
        setToggleCart,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
