import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ItemContext from "./context/itemContext";
import HomeData from "./HomeData";
import { useNavigate } from "react-router-dom";

const Orders = () => {

  const navigate=useNavigate();

  const {
    orders,res,searchInput,setObj
  } = useContext(ItemContext);

  const orderItem=(e)=>{
    setObj(e);
    navigate('/aboutproduct');
  }

    
  return (
    <>
      <Navbar />
      {
        searchInput.length === 0?
      <div className="min-h-[100vh] mt-[9vh]">
        { orders.length == 0 ?
        (
          <div className="flex flex-col items-center justify-center mt-[28vh]">
            <h1 className="md:text-3xl text-2xl font-semibold">
              No Orders!😟
            </h1>
            <img
              className="md:h-[30vh] h-[26vh] md:w-[20vw] object-contain"
              src="./images/norder.png"
              alt="Cart is empty"
            />
      </div>
      ):
        orders.map((e, index) => {
          return (
            <div
              key={index}>
                <div className="min-h-[20vh] md:w-full w-[95vw] px-4 flex items-center gap-x-4 bg-white"
                >
              <div onClick={()=>orderItem(e)} className=" overflow-hidden shadow-md cursor-pointer hover:shadow-2xl ">
                {e.images ? (
                  <img
                  className=" z-[1] hover:scale-[1.1] h-[35vh] md:w-[20vw] object-cover transition-all ease-in-out duration-[0.2s]"                    src={e.images[0]}
                    alt=""
                  />
                ) : (
                  <img
                  className=" z-[1] hover:scale-[1.1] h-[35vh] md:w-[20vw] object-cover transition-all ease-in-out duration-[0.2s]"                    src={e.image}
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

                    <div>
                      <b className="font-bold">Price : </b>₹{e.price}
                    </div>
                  <span className="font-black text-[#006aff]">Order Confirmed</span>
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-white flex items-center justify-end mb-8">

              <div className="bg-white font-black px-6 py-4">Order Id: {res.razorpay_order_id}</div>
              <p className="bg-white font-black px-6 py-4">Timestamp:{e.bookingTime}</p>
              </div>

            </div>
          );
        })
        }
      </div>
      :
      <HomeData/>
      }
      <Footer />
    </>
  );
};

export default Orders;
