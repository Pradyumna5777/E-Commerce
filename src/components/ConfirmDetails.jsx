import React, { useContext } from "react";
import Navbar from "./Navbar";
import ItemContext from "./context/itemContext";
import HomeData from "./HomeData";
import Footer from "./Footer";
import "../glass.css";
import { useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import AddressComp from "./AddressComp";

const ConfirmDetails = () => {
  const {
    data,
    setObj,
    users,
    obj,
    setRes,
    orders,
    setOrders,
    userDetails,
    currentAddress,
    checkOutItem,
    setChekOutItem,
    searchInput,
    itemPrice,
  } = useContext(ItemContext);
  const navigate = useNavigate();
  const itemClick = (e) => {
    setObj(e);
    setChekOutItem("");
    navigate("/aboutproduct");
  };

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
          console.log(res);
          const mergedArray = [...orders, ...checkOutItem];
          setOrders(mergedArray);
          setRes(res);
          navigate("/orders");
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
  console.log("orderss", orders);
  return (
    <div>
      <Navbar />
      {searchInput.length === 0 ? (
        <div className="flex items-center justify-between">
          <div className="mt-[9vh] min-h-[100vh] w-[60vw] bg-[#fff">
            <div className="px-4 py-5 bg-white flex w-[60vw] items-center justify-center flex-col gap-[2.1vh]">
              {checkOutItem.map((e, index) => {
                const totalPrice = e.price * e.quantity;
                return (
                  <>
                    {e.title !== "" ? (
                      <div
                        key={index}
                        className="min-h-[32vh] md:w-full px-[5vw] flex gap-x-4 items-center justify-between"
                      >
                        <div>
                          <p>
                            <b className="font-bold text-base">
                              {e.title.slice(0, 30) + "..."}
                            </b>
                          </p>
                          <div
                            onClick={() => itemClick(e)}
                            className="bg-[#fff] mb-[2vh] w-[15.5vw] overflow-hidden cursor-pointer  hover:shadow-xl"
                          >
                            {e.images ? (
                              <img
                                className="md:min-h-[30vh] h-full hover:scale-[1.1] transition-all ease-in-out duration-[0.3s] md:w-[15vw] w-[55vw] object-cover"
                                src={e.images[0]}
                                alt=""
                              />
                            ) : (
                              <img
                                className="md:min-h-[30vh] hover:scale-[1.1] transition-all ease-in-out duration-[0.3s] md:w-[15vw] w-[55vw] object-cover"
                                src={e.image}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex justify-center text-sm md:text-xl px-[6vw] py-[5vh]">
                          <div className="flex justify-between">
                            <div className="flex flex-col bg-[#acacac35] rounded px-[2vw] py-[1vh] w-[20vw]">
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
                                      <b className="font-bold">Model:</b>
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
                                      <b className="font-bold">Color:</b>{" "}
                                      {e.color}
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </>
                              )}
                              <div>
                                {
                                  <>
                                    <b className="font-bold">Quantity:</b>

                                    <h1 className="font-black inline-block text-center md:w-[2vw] md:py-[0.3px] px-2 ">
                                      {e.quantity}
                                    </h1>
                                  </>
                                }
                              </div>
                              <div>
                                <b className="font-bold">Price : </b>₹
                                {totalPrice}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </div>
            {
              <div className="px-[6vw] py-5 bg-white flex items-center justify-between">
                <button
                  onClick={() => buyNow(obj)}
                  className="bg-[#2563eb] hover:text-[2.7vh] transition-all ease-out duration-[0.1s] font-black text-white md:text-xl text-md md:py-1 w-[45vw] md:h-[6vh] md:w-[25vw]"
                >
                  Proceed to Payment
                </button>
                <h1 className="md:text-xl text-md font-black">
                  Cart Total: ₹{itemPrice}
                </h1>
              </div>
            }
          </div>
          <div className="fixed top-[30%] right-[1vw] text-xl">

          <AddressComp />
          </div>
        </div>
      ) : data.length === 0 ? (
        <div className="h-[100vh] w-[100vw] font-black text-2xl flex items-center justify-center">
          No Results
        </div>
      ) : (
        <HomeData />
      )}
      <Footer />
    </div>
  );
};

export default ConfirmDetails;
