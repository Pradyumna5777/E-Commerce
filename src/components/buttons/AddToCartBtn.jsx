import React, { useContext } from "react";
import ItemContext from "../context/itemContext";

const AddToCartBtn = ({e,index}) => {

    const {
        cart,
        setObj,
        setCart
      } = useContext(ItemContext);

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
          model,
        } = e;
        setObj({
          id: index,
          title,
          category,
          brand,
          dimensions,
          returnPolicy,
          rating,
          price,
          model,
          images,
          image,
          description,
          shippingInformation,
        });
        const itemExists = cart.some((item) => item.id === e.id);
        if (!itemExists) {
          setCart([...cart, { ...e, quantity: 1 }]);
        } else {
          swal("Book Again!", "😄");
        }
      };
      

  return (
    <button
      onClick={() => bookBtn(e, index)}
      className="bg-[#242323] hover:bg-[#1b1b1bd3] w-[100%] p-[1vh] text-white text-center md:text-base text-sm font-semibold absolute md:bottom-[5.3vh] bottom-10"
    >
      Buy Now
    </button>
  );
};

export default AddToCartBtn;
