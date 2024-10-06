// import React, { useContext, useState } from "react";
// import "remixicon/fonts/remixicon.css";
// import ItemContext from "./context/itemContext";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const BookNowTemp = () => {

//   const {
//     obj,
//   } = useContext(ItemContext);

// const[show,setShow]=useState('-112%');


//   const payDetails = () => {
//     console.log("Booked");
    
//   };

// const showDesc=()=>{
//   if(show=='-112%'){

//     setShow('18vw');
//   }else{
//     setShow('-112%');
//   }
// }

//   return (
//     <>
//     <Navbar/>
//     <div
//       className="min-h-[100vh] md:w-[100vw] w-[95vw] bg-[#ffffffd8] mt-[9.6vh]"
//     >
//       <div className="md:flex flex-col px-4 py-4 gap-4 w-full">
        
//         <div className="w-full  flex flex-col items-center gap-6">
//           <div className="flex  w-full items-center justify-center flex-col gap-2">
//             <h1 className="md:text-2xl text-xl font-semibold">{obj.title}</h1>
//           </div>
//           <div className="w-full relative flex items-center gap-[5vw] px-[5vw]">
//               {
//             obj.image?
//     <img src={obj.image}
//           className="md:h-[full] z-[1] shadow-md h-[40vh] w-[100vw] md:w-[20vw] object-cover"
//           alt=""
//         />:
//         <img
//           src={obj.images[0]}
//           className="md:h-[full] z-[1] shadow-md h-[40vh] w-[100vw] md:w-[20vw] object-cover"
//           alt=""
//         />
//           }
//           <div className="flex h-[30vh] items-center relative">
//           <div className="grid w-[20vw] gap-3 h-[30vh] z-[1]">
//               {
//                 obj.brand && <div className="flex items-start gap-2">
//                 <span className="font-extrabold md:text-base">Brand:</span>
//                 <span className="text-sm md:text-base">{obj.brand.charAt(0).toUpperCase()+obj.brand.slice(1)}</span>
//               </div>
//               }
//               <div className="flex items-start gap-2">
//                 <span className="font-extrabold md:text-base">Price:</span>
//                 <span className="text-sm md:text-base">₹{obj.price}</span>
//               </div>
//               {
//                 obj.shippingInformation?
//                 <div className="flex items-start gap-2">
//                 <span className="font-extrabold md:text-base">Ship Time:</span>
//                 <span className="text-sm md:text-base">{obj.shippingInformation
//                 }</span>
//               </div>:
//               <>{obj.color?
//               <div className="flex items-start gap-2">
//               <span className="font-extrabold md:text-base">Color:</span>
//               <span className="text-sm md:text-base">{obj.color}</span>
//             </div>:''
//               }</>
//               }
              
//               {
//                 obj.dimensions &&
//                 <div className="flex items-start gap-2">
//                 <span className="font-extrabold md:text-base">Dimensions:</span>
//                 <span className="text-sm md:text-base">{obj.dimensions.width +" "+ "X" +" "+ obj.dimensions.height+" "+ "X" +" "+ obj.dimensions.depth}</span>
//               </div>

//               }
              
//               {
//                 obj.returnPolicy?
//                 <div className="flex items-start gap-2">
//                 <span className="font-extrabold md:text-base">Return Policy:</span>
//                 <span className="text-sm md:text-base">{obj.returnPolicy}</span>
//               </div>:(obj.category?
//               <div className="flex items-start gap-2">
//               <span className="font-extrabold md:text-base">Category:</span>
//               <span className="text-sm md:text-base">{obj.category}</span>
//             </div>: '')
//               }
//               {
//                 obj.rating?
//                 (<div className="flex items-start gap-2">
//                 <span className="font-extrabold md:text-base">Ratings:</span>
//                 <span className="text-sm md:text-base">{"⭐"+obj.rating.rate+"/5"}</span>
//               </div> || <div className="flex items-start gap-2">
//                 <span className="font-extrabold md:text-base">Ratings:</span>
//                 <span className="text-sm md:text-base">{"⭐"+obj.rating+"/5"}</span>
//               </div>):(
//               <div className="flex items-start gap-2">
//               <span className="font-extrabold md:text-base">Model:</span>
//               <span className="text-sm md:text-base">{obj.model}</span>
//             </div>)
//               }
//               <button onClick={showDesc} className="bg-[#c71bf2b9] w-[10vw] md:text-base text-white rounded">{show=='-112%'?"Show Description":"Hide Description"}</button>
//               </div>
//         <div className="text-justify md:text-base ml-8 h-[100%] w-[40vw] px-[1vw] transition-all ease-in-out duration-[0.3s] font-bold absolute -left-[115%]" style={{left:show}}>
//         <div className="text-lg">
//                 Description
//               </div>{obj.description.slice(0,500)+"..."}</div>
//               <div className="absolute h-[100%] -left-[96%] bg-[#FCFCFC] border-r-[1px] border-[#00000062] w-[40vw]"></div>
              
//           </div>
//         </div>
//           <button
//             onClick={payDetails}
//             className="text-white md:text-lg flex items-center justify-between font-semibold self-end py-2 px-[5vw]  bg-[#242323] hover:bg-[#1b1b1bd3]"
//           >
//             Proceed With This Item<i className="ri-arrow-right-line"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default BookNowTemp;
