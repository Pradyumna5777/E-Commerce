import React, { useContext } from 'react'
import UserProfilePic from './UserProfilePic'
import ItemContext from './context/itemContext';

const TopBar = () => {

    const {
        userDetails
        
      } = useContext(ItemContext);


  return (
    <div className="flex items-center border-none">
            <UserProfilePic />
            <div className="flex flex-col px-2">
              <span className="cursor-pointer">Hello,</span>
              {userDetails?
              <span className="font-semibold capitalize cursor-pointer">{userDetails.firstName+" "+userDetails.lastName}</span>:''
              }
            </div>
          </div>
  )
}

export default TopBar