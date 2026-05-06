import React, { useContext, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoFastFood } from 'react-icons/io5'
import { RiShoppingBag4Line } from 'react-icons/ri'
import { dataContext } from '../context/UserContext'
import food_items from '../food'

const Navbar = () => {
const {input , setInput , cate , setCate , showCart , setShowCart} = useContext(dataContext)
  
useEffect(()=>{
  const newList = food_items.filter((ftm)=>ftm.food_name.includes(input) ||ftm.food_name.toLowerCase().includes(input) );
  setCate(newList)
},[input])

return (
    <div className='flex justify-between items-center px-8 py-6'>
      <div className='text-white bg-[#FF5200] rounded-lg p-3.5 shadow-xl'>
        <IoFastFood className='size-6' />
      </div>

      <form
      onSubmit={(e)=>e.preventDefault()}
      className='flex h-14 w-[50%] bg-amber-50 rounded-full items-center gap-4 px-5 shadow-sm'>
        <CiSearch className='size-6 text-gray-400' />
        <input
        onChange={(e)=> setInput(e.target.value)}
         value={input}
          className='w-full bg-transparent outline-none text-gray-600 placeholder-gray-400'
          type="text"
          placeholder='search items...'
        />
      </form>

      <div 
      onClick={()=>setShowCart(true)}
      className=' relative text-white bg-[#FF5200] w-12 h-12  rounded-lg  shadow-xl cursor-pointer hover:scale-110 transition-all duration-150 flex justify-center items-center'>
       <span className="absolute top-0 right-1 font-bold text-[18px]">0</span>
        <RiShoppingBag4Line className='size-6' />
      </div>
    </div>
  )
}

export default Navbar;