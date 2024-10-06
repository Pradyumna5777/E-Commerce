import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideDetails from "./SideDetails";
import ItemContext from "./context/itemContext";
import HomeData from "./HomeData";

const SavedAddress = () => {
  const { data,searchInput, setCurrentAddress,allAddress,setAllAddress } = useContext(ItemContext);



  const deleteAddress=(val,index)=>{
    const backup=[...allAddress];
    backup.splice(index,1);
    setAllAddress(backup);
    
  }

  const editAddress=(val,index)=>{
   
  }
  const chooseAddress=(val)=>{

    console.log(val);
    setCurrentAddress(val);
    swal("Address Updated!");
    
  }

  return (
    <>
      <Navbar />
      {
        searchInput.length === 0?
      <div className="flex gap-4 min-h-[100vh] mt-[9vh] w-[100vw] px-[5vw] py-[3vh]">
        <SideDetails />
        <div className="px-[2vw] flex bg-white overflow-y-auto custom-scrollbar h-[100vh] w-[75vw] shadow-xl flex-col gap-[4vh]">
          <div>
            {allAddress.length===0?
            <div className="flex items-center justify-center relative">
                <h1 className="absolute text-2xl font-semibold">No Saved Addressess</h1>
                <img src="./images/nodata.png" className="h-[80vh]" alt="emptydata" />
            </div>:
            allAddress.map((val,index) => {
                return(
              <div key={index}>
                <div className="text-2xl font-semibold">Address {index+1}</div>
                <form className="flex flex-col items-center justify-center py-2 border rounded border-[#7b7b7b52]">
                  <div className="grid ml-2 grid-cols-2 py-4 gap-y-2">
                    <div>
                      <label for="fullname">Full Name:</label>
                      <input
                        disabled
                        value={val.fullname}
                        type="text"
                        placeholder="Full Name"
                        className="placeholder:text-black w-[30vw] bg-transparent py-3 px-4 border-2 text-md rounded outline-none text-black border-black"
                      />
                    </div>
                    <div>
                      <label for="phonenumber">Phone Number:</label>
                      <input
                        disabled
                        value={val.phonenumber}
                        type="number"
                        placeholder="+91"
                        className="placeholder:text-black w-[30vw] bg-transparent py-3 px-4 border-2 text-md rounded outline-none text-black border-black"
                      />
                    </div>
                    <div>
                      <label for="pincode">Pincode:</label>
                      <input
                        disabled
                        value={val.pincode}
                        type="number"
                        placeholder="Pincode"
                        className="placeholder:text-black w-[30vw] bg-transparent py-3 text-md px-4 border-2 rounded text-black border-black outline-none"
                      />
                    </div>
                    <div>
                      <label for="state">State:</label>
                      <input
                        disabled
                        value={val.state}
                        type="text"
                        placeholder="State"
                        className="placeholder:text-black w-[30vw] bg-transparent py-3 text-md px-4 border-2 rounded text-black border-black outline-none"
                      />
                    </div>
                    <div>
                      <label for="city">City:</label>
                      <input
                        disabled
                        value={val.city}
                        type="text"
                        placeholder="City"
                        className="placeholder:text-black w-[30vw] bg-transparent py-3 text-md px-4 border-2 rounded text-black border-black outline-none"
                      />
                    </div>
                    <div>
                      <label for="roadname">Road name, Area, Colony:</label>
                      <input
                        disabled
                        value={val.roadname}
                        type="text"
                        placeholder="Road name, Area, Colony"
                        className="placeholder:text-black w-[30vw] bg-transparent py-3 text-md px-4 border-2 rounded text-black border-black outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                  <button type="button" onClick={()=>chooseAddress(val,index)} className="bg-[#FB641B] text-white px-[1.5vw] font-black rounded py-[1vh]">
                    Choose This Address
                  </button>
                  <button type="button" onClick={()=>editAddress(val,index)} className="bg-[#FB641B] text-white px-[1.5vw] font-black rounded py-[1vh]">
                    Edit Address
                  </button>
                  <button type="button" onClick={()=>deleteAddress(val,index)} className="bg-red-600 text-white px-[1vw] rounded py-[1vh]">
                  <i className="ri-delete-bin-5-line"></i>
                  </button>
                  </div>
                </form>
              </div>
                )
            })}
          </div>
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

export default SavedAddress;
