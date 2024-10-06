import React, { useContext, useState } from "react";
import "remixicon/fonts/remixicon.css";
import swal from "sweetalert";
import ItemContext from "./context/itemContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DetailCard = () => {

  const {
    cart,
    setCart,
    setBookedItems,
    bookedItems
  } = useContext(ItemContext);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    date: "",
   
    billingaddress: "",
  });
  

  

  const inputChange = (e) => {
    const val = e.target.value;
    const names = e.target.name;
    setForm({
      ...form,
      [names]: val,
    });
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
  console.log("bookeditem",bookedItems);
  

  return (
    <div>
      <Navbar/>
      <div
        className="mt-[10vh] mb-[1vh] mx-[auto] border-[1px] border-[#2563eb] shadow-2xl min-h-[65vh] md:w-[50vw] w-[95vw] bg-[#ffffffd8] rounded"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="md:text-4xl text-2xl underline underline-offset-4">
            Details
          </h1>
          
          <form
            onSubmit={(e) => submitForm(e)}
            className="grid grid-cols-2 mt-[5vh] gap-x-[4vw] gap-y-[2vw] relative px-2 py-2"
          >
            <div className="flex justify-center flex-col">
              <label htmlFor="Full Name">Full Name:</label>
              <input
                required
                onChange={(e) => inputChange(e)}
                type="text"
                name="fullname"
                className="FullName md:w-[20vw] h-[5vh] outline-none rounded px-2 bg-gray-400"
              />
            </div>
            <div className="flex justify-center flex-col">
              <label htmlFor="Email">Email:</label>
              <input
                required
                onChange={(e) => inputChange(e)}
                type="text"
                name="email"
                className="Email md:w-[20vw] h-[5vh] outline-none rounded px-2 bg-gray-400"
              />
            </div>
            <div className="flex justify-center flex-col">
              <label htmlFor="Phone Number">Phone Number:</label>
              <input
                required
                onChange={(e) => inputChange(e)}
                type="Number"
                name="phonenumber"
                className="PhoneNumber md:w-[20vw] h-[5vh] outline-none rounded px-2 bg-gray-400"
              />
            </div>
            <div className="flex justify-center flex-col">
              <label htmlFor="Date">Date:</label>
              <input
                required
                onChange={(e) => inputChange(e)}
                type="date"
                name="date"
                className="Date md:w-[20vw] h-[5vh] outline-none rounded px-2 bg-gray-400"
              />
            </div>
            <div className="flex justify-center flex-col">
              <label htmlFor="Billing Address">Billing Address:</label>
              <input
                required
                onChange={(e) => inputChange(e)}
                type="text"
                name="billingaddress"
                className="BillingAddress md:w-[20vw] h-[5vh] outline-none rounded px-2 bg-gray-400"
              />
            </div>
            
            <button className="text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[10vh] md:py-2 py-1 text-md md:px-10 px-2 bg-[#2563eb] w-[fit-content]">
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DetailCard;
