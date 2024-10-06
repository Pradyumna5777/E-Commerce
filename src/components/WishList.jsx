import React, { useContext } from "react";
import ItemContext from "./context/itemContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeData from './HomeData';

const WishList = () => {
  const {searchInput,data,setChekOutItem,currentDateTime, wishItem,setWishItem,setCart,cart,setCartNumber } =
    useContext(ItemContext);

    const removeCartItem = (index) => {
        const backupData = [...wishItem];
        backupData.splice(index, 1);
        setWishItem(backupData);
        swal("Removed from Wishlist!", "😞");
      };
      
const moveToCart=(e)=>{
  const arr=wishItem.filter((val)=>{
    return(
      val !== e
    )
  })
  // setCart([...cart,e]);
  setCart([{ ...e, quantity: 1,bookingTime:currentDateTime },...cart])  //destructuring and adding extra property here quantity
  setChekOutItem([{ ...e, quantity: 1 },...cart]);
  setWishItem(arr);
  setCartNumber(cart.length+1);

}
  return (
    <>
      <Navbar />
      {
        searchInput.length === 0?
      <div className="mt-[9vh] min-h-[100vh] bg-[#f4f2f2e8] w-[100vw] custom-scrollbar z-[2]">
        <div className="px-4 py-5 flex items-center justify-center flex-col">
          {wishItem.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-[28vh] bg-[#7d7d7d2a] rounded-full">
              <h1 className="md:text-3xl text-2xl font-semibold">
                WishList is empty!😟
              </h1>
              <img
                className="md:h-[30vh] h-[26vh] md:w-[20vw] object-contain"
                src="./images/brokenwish.png"
                alt="Cart is empty"
              />
            </div>
          ) : (
            wishItem.map((e, index) => {
              return (
                <div
                  key={index}
                  className="min-h-[32vh] border border-b-slate-50 bg-white md:w-full w-[95vw] px-4 flex gap-x-4"
                >
                  {
                    e.image?
                    <div>
                    <img
                      className="md:min-h-[30vh] h-full md:w-[15vw] w-[55vw] object-cover"
                      src={e.image}
                      alt=""
                    />
                  </div>:e.images?
                  <div>
                  <img
                    className="md:min-h-[30vh] h-full md:w-[15vw] w-[55vw] object-cover"
                    src={e.images[0]}
                    alt=""
                  />
                </div>:''
                  }
                  <div className="flex justify-center text-sm md:text-xl">
                    <div className="w-[70vw] flex justify-between">
                      <div className="flex flex-col justify-center">
                        <p>
                          <b className="font-bold">{e.title}</b>
                        </p>
                        {
                          e.brand?
                        <p>
                          <b>Brand:</b> {e.brand}
                        </p>:''
                        }
                        {
                          e.dimensions?
                          <p>
                          <b>Dimensions:</b>{" "}
                          {e.dimensions.width +
                            " " +
                            "X" +
                            " " +
                            e.dimensions.height +
                            " " +
                            "X" +
                            " " +
                            e.dimensions.depth}
                        </p>:''
                        }
                        {
                          e.returnPolicy?
                        <p>
                          <b>Return Policy:</b> {e.returnPolicy}
                        </p>:e.color?
                         <p>
                         <b>Color:</b> {e.color}
                       </p>:''
                        }

                        <div>
                          <b>Price : </b>₹{e.price}
                        </div>
                        {
                          e.shippingInformation?
                          <p>
                          <b>Delivery Time:</b> {e.shippingInformation}
                        </p>:e.category?
                         <p>
                         <b>Category:</b> {e.category}
                       </p>:''
                        }

                        {
                          e.model?
                          <div>
                          <b>Model : </b>{e.model}
                        </div>:''
                        }
                      </div>
                      <div className="flex flex-col justify-center gap-2 mt-2">
                        <button
                          onClick={() => moveToCart(e, index)}
                          className="bg-[#FF9F00] hover:bg-[#ff9d00d3] font-black hover:text-[2.7vh] transition-all ease-out duration-[0.1s] text-white py-[2vh] md:w-[30vw] "
                        >
                          Move To Cart
                        </button>
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
      </div>
      : data.length === 0?
      <div className="h-[100vh] w-[100vw] font-black text-2xl flex items-center justify-center">No Results</div>:
      <HomeData/>

      }
      <Footer />
    </>
  );
};

export default WishList;
