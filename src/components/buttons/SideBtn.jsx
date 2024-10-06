import React from 'react'
import FilterBtn from './FilterBtn'
import RemoveFilterBtn from './RemoveFilterBtn'
import WishListBtn from './WishListBtn'

const SideBtn = () => {
  return (
    <div className="flex bg-white rounded-2xl py-4 px-2 roundes shadow-md md:flex-col gap-2 absolute md:top-[2vh] top-2 left-0 text-white text-xl">
    <FilterBtn />
    <RemoveFilterBtn />
    <WishListBtn />
  </div>
  )
}

export default SideBtn