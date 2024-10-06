import { useContext, useEffect } from "react";
import firebaseAppConfig from "../util/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import ItemContext from "./context/itemContext";

const auth = getAuth(firebaseAppConfig);

const Protector = () => {

  const {state,setState } = useContext(ItemContext);


  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          user?setState(user):setState(false);
        });
    }, []);
    
    if(state === null) 
    return(
     
         <div className="h-[100vh] w-[100vw] gap-[1vh] bg-slate-500 flex items-center justify-center flex-col">
           <span className="relative flex h-8 w-8">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-8 w-8 bg-sky-500"></span>
           </span>
             <h1 className="text-2xl text-white">Processing...</h1>
         </div>
    )
    if(state) 
    return <Navigate to="/" />

  return <Outlet />
}
export default Protector;
