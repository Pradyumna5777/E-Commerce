import { useContext } from "react";
import SwiperPage from "./SwiperPage";
import ItemContext from "./context/itemContext";

const FakeLoader = () => {
    const {
        allCards,
      } = useContext(ItemContext);
  

  return (
    <>
      <SwiperPage />
      <div className="min-h-[100vh] mt-[9vh] object-cover w-[100vw] flex gap-[4vh] justify-center py-[4vh] flex-wrap text-[#fff] relative">
        <div className="flex md:flex-col gap-2 absolute md:top-[2vh] top-2 left-4 text-white text-xl">
          
        </div>
        <div
          className="z-[1] bg-[#ffffffd5] h-[100vh] w-[20%] ml-[5.6vw] absolute top-[6.3vh] left-0 shadow-2xl"
         
        >
          <h1 className="text-black text-2xl p-1"></h1>
        </div>
        <div
          className="text-black grid grid-cols-4 gap-[2vw] transition-all ease-in-out"
          
        >
          {allCards.map((e, index) => {
            return (
              <div key={index}>
                <div className="md:h-[65vh] h-[45vh] shadow-2xl flex flex-col items-center gap-[4vh] w-[48vw] md:mt-4 mt-6 md:w-[20vw] overflow-hidden relative border-[#0000001b] border-[1px]">
                  <div className="relative">
                    <img
                      className="md:h-[25vh] h-[12vh] cursor-pointer md:w-[20vw] w-[100%] object-cover hover:scale-[1.1] hover:rounded-b-[6px] transition duration-300 ease-out"
                      src=''
                    />
                    <div className="flex flex-col gap-1 absolute top-0 left-0">
                    <span className="bg-[#ff0000ba] h-[1vh] w-[2vw]">
                    </span>
                    <span className="bg-[#11ff00ba] h-[1vh] w-[2vw]">
                    </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full px-1 md:p-2 md:gap-y-[1vh] gap-y-[0.3vh]">
                    <h1 className="md:text-xl text-xs font-semibold h-[1vh] w-[4vw] -mt-6 title">
                    </h1>
                    <p className="font-bold h-[1vh] w-[2vw] md:mt-4 mt-2 md:text-sm text-xs">
                     
                    </p>
                    <p className="location md:text-sm text-xs h-[1vh] w-[2vw]">
                      
                    </p>
                    <p className="font-semibold md:text-sm text-xs h-[1vh] w-[3vw]">
                      
                    </p>
                  </div>
                  
                    
                      <div
                       
                        className="hover:bg-[#0051ffdb] h-[5vh] w-[100%] bg-[#0f5afc] p-[1vh] text-white text-center md:text-lg text-sm font-semibold -ml-[10vw] absolute md:bottom-11 bottom-10"
                      >
                      </div>
                  
                  <div
                    className="hover:bg-[#ff8800e5] h-[5vh] w-[100%] bg-[#ff8800] p-[1vh] text-white text-center font-semibold md:text-lg text-sm absolute bottom-0"
                  >
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-black h-[3vh] w-[5vw] bg-white font-semibold text-2xl">
      </div>
    </>
  );
};
export default FakeLoader;
