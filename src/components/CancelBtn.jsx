import React, { useContext } from 'react'
import ItemContext from './context/itemContext';

const CancelBtn = () => {

  const {isMobile, setToggleCart,setBgOpacity,setBookedSlider} = useContext(ItemContext);

    const cancelCard = () => {
        setBookedSlider(isMobile ? '-100vw' : '-40vw');
        setToggleCart(isMobile ? '-100vw' : '-45vw');
        setBgOpacity("");
      };
     
  return (
    <button
          onClick={() => cancelCard()}
          className="absolute top-0 right-0 text-2xl px-2 mr-2 mt-2 transition ease-in duration-[0.2] hover:scale-[1.3] hover:bg-white rounded-full hover:text-red-600"
        >
          <i className="ri-close-large-line"></i>
        </button>
  )
}

export default CancelBtn