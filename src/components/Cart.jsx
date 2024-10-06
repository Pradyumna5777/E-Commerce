import React, { useContext } from "react";
import ItemContext from "./context/itemContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeData from './HomeData'
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    setCartNumber,
    setObj,
    obj,
    calculateTotalPrice,
    cart,
    setChekOutItem,
    setCart,
    searchInput,


  } = useContext(ItemContext);

  // console.log("cart", cart);
  const navigate=useNavigate();

  const plus = (index) => {
    setCart(
      cart.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const minus = (index) => {
    setCart(
      cart.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeCartItem = (index) => {
    const backupData = [...cart];
    backupData.splice(index, 1);
    setCart(backupData);
    setCartNumber(cart.length - 1);
    swal("Removed from cart!", "😞");
  };

  const bookBtn = (e, index) => {
    const {
      description,
      title,
      price,
      quantity,
      images,
      dimensions,
      shippingInformation,
      rating,
      category,
      color,
      discount,
      image,
      model,
      returnPolicy,
      brand,
      bookingTime
    } = e;

    setObj({
      id: index,
      title,
      description,
      color,
      bookingTime,
      discount,
      image,
      model,
      price,
      dimensions,
      shippingInformation,
      rating,
      returnPolicy,
      category,
      brand,
      images,
      quantity: quantity || 1,
    });
  };

  const checkingOut = () => {
    navigate('/confirmdetails');
    setChekOutItem([...cart]);
    setCart([]);
    
    
  };
  const cartItemDetail=(e)=>{
    setObj(e);
    navigate('/aboutproduct');
  }
  console.log("cacact",cart);
  

  return (
    <div>
      <Navbar />
      {
        searchInput.length === 0?
      <div className="mt-[9vh] min-h-[100vh] w-[100vw] custom-scrollbar bg-[#f4f2f2e8] z-[2]">
        <div className="px-4 py-5 flex items-center justify-center flex-col gap-[.1vh]">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-[28vh] bg-[#7d7d7d2a] rounded-full">
              <h1 className="md:text-3xl text-2xl font-semibold">
                Cart is empty!😟
              </h1>
              <img
                className="md:h-[30vh] h-[26vh] md:w-[20vw] object-contain"
                src="./images/empcart.png"
                alt="Cart is empty"
              />
            </div>
          ) : (
            cart.map((e, index) => {
              const totalPrice = e.price * e.quantity;
              return (
                <div
                  key={index}
                  className="min-h-[32vh] py-[1vh] border border-b-slate-50 md:w-full w-[95vw] px-4 flex gap-x-4 bg-white"
                >
                  <div onClick={()=>cartItemDetail(e)} className="cursor-pointer hover:shadow-lg">
                    {e.images ? (
                      <img
                        className="md:min-h-[30vh] h-full md:w-[15vw] w-[55vw] object-cover"
                        src={e.images[0]}
                        alt=""
                      />
                    ) : (
                      <img
                        className="md:min-h-[30vh] md:w-[15vw] w-[55vw] object-cover"
                        src={e.image}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="flex justify-center text-sm md:text-xl">
                    <div className="w-[70vw] flex justify-between">
                      <div className="flex flex-col justify-center">
                        <p>
                          <b className="font-bold ">{e.title}</b>
                        </p>
                        {e.category ? (
                          (
                            <p>
                              <b className="font-bold">Category:</b>{" "}
                              {e.category}
                            </p>
                          ) || ""
                        ) : (
                          <p>
                            <b className="font-bold">Brand:</b> {e.brand}
                          </p>
                        )}

                        {e.dimensions ? (
                          <p>
                            <b className="font-bold">Dimensions:</b>{" "}
                            {`${e.dimensions.width} × ${e.dimensions.height} × ${e.dimensions.depth}`}
                          </p>
                        ) : (
                          <>
                            {e.model ? (
                              <p>
                                <b className="font-bold">Model: </b>
                                {e.model}
                              </p>
                            ) : (
                              ""
                            )}
                          </>
                        )}

                        {e.returnPolicy ? (
                          <p>
                            <b className="font-bold">Return Policy:</b>{" "}
                            {e.returnPolicy}
                          </p>
                        ) : (
                          <>
                            {e.color ? (
                              <p>
                                <b className="font-bold">Color:</b> {e.color}
                              </p>
                            ) : (
                              ""
                            )}
                          </>
                        )}
                        <div>
                          {
                            <>
                              <b className="font-bold">Quantity: </b>
                              <button
                                onClick={() => minus(index)}
                                className="bg-yellow-400 hover:bg-[#ffd904] md:px-1 px-[1px] rounded"
                              >
                                <i className="ri-subtract-line"></i>
                              </button>
                              <h1 className="bg-blue-400 hover:bg-[#0685f4e8] font-black inline-block text-center md:w-[2vw] md:py-[0.3px] px-2 rounded">
                                {e.quantity}
                              </h1>
                              <button
                                onClick={() => plus(index)}
                                className="bg-yellow-400 hover:bg-[#ffd904] md:px-1 px-[1px] rounded"
                              >
                                <i className="ri-add-line"></i>
                              </button>
                            </>
                          }
                        </div>
                        <div>
                          <b className="font-bold">Price : </b>₹{totalPrice}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center gap-2 mt-2">
                      <Link to="/aboutproduct" className="w-full">
                        <button
                          onClick={() => bookBtn(e, index)}
                          className="bg-[#FF9F00] hover:bg-[#ff9d00d3] font-black hover:text-[2.7vh] transition-all ease-out duration-[0.1s] text-white py-[2vh] md:w-[30vw] "
                        >
                          Buy Now
                        </button>
                        </Link>
                        <button
                          onClick={() => removeCartItem(index)}
                          className="bg-[#dc2626] hover:bg-[#ff4b4b] font-black hover:text-[2.7vh] transition-all ease-out duration-[0.1s] text-white py-[2vh] md:w-[30vw]"
                        ><i className="ri-delete-bin-5-line"></i>{" "}
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {cart.length === 0 || (
          <div className="px-4 py-5 bg-white flex items-center justify-between">
            <button
              onClick={checkingOut}
              className="bg-[#2563eb] hover:text-[2.7vh] transition-all ease-out duration-[0.1s] font-black text-white md:text-xl text-md md:py-1 w-[45vw] md:h-[6vh] md:w-[25vw]"
            >
              Proceed to Checkout
            </button>
            <h1 className="md:text-xl text-md font-black">
              Cart Total: ₹{calculateTotalPrice().toFixed(2)}
            </h1>
          </div>
        )}
      </div>
      :
      <HomeData/>

      }
      <Footer />
    </div>
  );
};

export default Cart;
