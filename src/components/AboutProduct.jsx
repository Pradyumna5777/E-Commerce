import React, { useContext } from "react";
import ItemContext from "./context/itemContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import AddressComp from "./AddressComp";
import SimilarItems from "./SimilarItems";
import HomeData from "./HomeData";
import CustomerRewiews from "./CustomerRewiews";
import useRazorpay from "react-razorpay";
// import AddressComp from "./AddressComp";

const AboutProduct = () => {
  const {searchInput,currentAddress,users,setCart, cart,setOrders,setRes,userDetails, obj,orders, AddCartBtn,checkOutItem,data } = useContext(ItemContext);
const navigate=useNavigate();
 console.log("checkOutItem",checkOutItem);
 const [Razorpay] = useRazorpay();
 

  const buyNow = async (e) => {
    if (users) {
      const res = await fetch("http://localhost:8095/order");
      const data = await res.json();
      const options = {
        amount: obj.price,
        order_id: data.orderId,
        key: "rzp_test_3sbsI1H6jJmncS",
        currency: "INR",
        name: "Pradyumna E-Commerce",
        description: "Products",
        image: "./images/Designer.png",
        handler: (res) => {
          // console.log(res);
          setCart([]);
          setOrders([...orders, e]);
          setRes(res);
          navigate('/orders');
        },
        prefill: {
          name: `${userDetails.firstname + userDetails.lastname}`,
          email: userDetails.email,
          contact: userDetails.phonenumber,
        },
        notes: {
          address: currentAddress,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new Razorpay(options);

      razor.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      razor.open();
    } else if (!users) {
      swal("Login First!");
    }
  };
 
  return (
    <>
      <Navbar />
      {
        searchInput.length === 0 ?
      (<>
      <div className="min-h-[70vh] md:w-[100vw] w-[95vw] bg-[#ffffffd8] mt-[9.6vh]">
        <div className="md:flex flex-col px-4 py-4 gap-4 w-full">
          <div className="w-full  flex flex-col items-center gap-6">
            <div className="flex  w-full items-center justify-center flex-col gap-2">
              <h1 className="md:text-3xl text-xl font-black">{obj.title}</h1>
            </div>
            <div className="w-full relative flex items-center gap-[5vw] px-[5vw]">
              <div className="w-[32.5%] overflow-hidden shadow-md cursor-pointer hover:shadow-xl ">
              {obj.image ? (
                <img
                  src={obj.image}
                  className="md:h-[full] z-[1] hover:scale-[1.1] h-[40vh] w-[100vw] md:w-[20vw] object-cover transition-all ease-in-out duration-[0.2s]"
                  alt=""
                />
              ) : (
                <img
                  src={obj.images[0]}
                  className="md:h-[full] z-[1] hover:scale-[1.1] h-[40vh] w-[100vw] md:w-[20vw] object-cover transition-all ease-in-out duration-[0.2s]"
                  alt=""
                />
              )}</div>
              <div className="bg-[#00000006] h-full relative px-[1vw] py-[3vh] rounded w-full shadow-md">
              <div className="flex h-[30vh] items-center">
                <div className="grid w-[20vw] h-[20vh] z-[1]">
                  {obj.brand && (
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold md:text-base">
                        Brand:
                      </span>
                      <span className="text-sm md:text-base">
                        {obj.brand.charAt(0).toUpperCase() + obj.brand.slice(1)}
                      </span>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <span className="font-extrabold md:text-base">Price:</span>
                    <span className="text-sm md:text-base">₹{obj.price}</span>
                  </div>
                  {obj.shippingInformation ? (
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold md:text-base">
                        Ship Time:
                      </span>
                      <span className="text-sm md:text-base">
                        {obj.shippingInformation}
                      </span>
                    </div>
                  ) : (
                    <>
                      {obj.color ? (
                        <div className="flex items-start gap-2">
                          <span className="font-extrabold md:text-base">
                            Color:
                          </span>
                          <span className="text-sm md:text-base">
                            {obj.color}
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  )}

                  {obj.dimensions && (
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold md:text-base">
                        Dimensions:
                      </span>
                      <span className="text-sm md:text-base">
                        {obj.dimensions.width +
                          " " +
                          "X" +
                          " " +
                          obj.dimensions.height +
                          " " +
                          "X" +
                          " " +
                          obj.dimensions.depth}
                      </span>
                    </div>
                  )}

                  {obj.returnPolicy ? (
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold md:text-base">
                        Return Policy:
                      </span>
                      <span className="text-sm md:text-base">
                        {obj.returnPolicy}
                      </span>
                    </div>
                  ) : obj.category ? (
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold md:text-base">
                        Category:
                      </span>
                      <span className="text-sm md:text-base">
                        {obj.category}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  {obj.rating ? (
                    (
                      <div className="flex items-start gap-2">
                        <span className="font-extrabold md:text-base">
                          Ratings:
                        </span>
                        <span className="text-sm md:text-base">
                          {"⭐" + obj.rating.rate + "/5"}
                        </span>
                      </div>
                    ) || (
                      <div className="flex items-start gap-2">
                        <span className="font-extrabold md:text-base">
                          Ratings:
                        </span>
                        <span className="text-sm md:text-base">
                          {"⭐" + obj.rating + "/5"}
                        </span>
                      </div>
                    )
                  ) : (
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold md:text-base">
                        Model:
                      </span>
                      <span className="text-sm md:text-base">{obj.model}</span>
                    </div>
                  )}
                </div>
                <div className="bg-[#d2d2d234] text-justify md:text-base ml-8 h-[90%] w-[40vw] px-[1vw] py-[1vh] font-bold absolute left-[31%]">
                  <div className="text-lg font-black rounded bg-[#141414c1] text-white w-[fit-content] px-[2vw] py-[.5vh]">Description</div>
                  <p className="font-black mt-2 py-[1vh]">{obj.description.slice(0, 500) + "..."}</p>
                </div>
              </div>
              </div>
            </div>
            <div className="flex items-center w-[100vw]">
              <div className="px-[5vw] text-base"><AddressComp/></div>
              <div className="w-[100vw] flex items-center justify-end px-6 gap-[2vw]">
                <button
                  onClick={() => buyNow(obj)}
                  className="text-white bg-[#FF9F00] hover:bg-[#ff9d00cf] hover:text-[2.7vh] transition-all ease-out duration-[0.1s] w-[25vw] md:text-lg font-black self-end py-[2vh] px-[8vw]"
                >
                  Buy Now
                </button>
                {cart.some((item) => item.title === obj.title) ? (
                  <Link to="/cart">
                    <button className="text-white hover:text-[2.7vh] transition-all ease-out duration-[0.1s] bg-[#dc2626] hover:bg-[#ff4b4b] w-[25vw] md:text-lg font-semibold self-end py-[2vh] px-[8vw]">
                    <div className="font-semibold flex items-center justify-center ">
                    Go to Cart
                    <i className="ri-arrow-right-wide-line"></i>
                    </div>
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => AddCartBtn(obj)}
                    className="text-white hover:text-[2.4vh] transition-all ease-out duration-[0.1s] bg-[#FB641B] hover:bg-[#ff4b4b] w-[25vw] md:text-lg font-semibold self-end py-[2vh] px-[8vw]"
                  ><div className="font-semibold flex items-center justify-center "><i className="ri-shopping-cart-line "></i> 
                    Add to Cart</div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarItems/>
      <CustomerRewiews/>
      </>): data.length === 0?
      <div className="h-[100vh] w-[100vw] font-black text-2xl flex items-center justify-center">No Results</div>:
      <HomeData/>}
      <Footer />
    </>
  );
};

export default AboutProduct;
