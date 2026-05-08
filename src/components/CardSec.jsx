import React from 'react'
import image1 from '../assets/image1.avif'
import { LuDelete } from 'react-icons/lu'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { RemoveItem } from '../redux/cartSlice'
const CardSec = ({name , price , image ,id ,qty}) => {
  const dispatch = useDispatch()
  return (
    <div className='w-full h-37.5 bg-white/40 shadow-lg p-2 flex justify-between rounded-2xl'>
      {/*left div  */}
      <div className='w-[60%] h-full  flex gap-8'>
        <div className='w-[55%] h-full overflow-hidden rounded-2xl  '>
          <img src={image} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='w-[40%] h-full flex justify-center flex-col gap-4'>
          <span className='text-lg text-gray-700 font-semibold'>{name}</span>
          <div className='w-full bg-white/40  text-orange-500 rounded-2xl p-2 flex shadow-lg overflow-hidden border-2 border-orange-500 font-bold text-lg  gap-2'>
            <button className='w-[40%] h-full justify-center items-center hover:bg-black/20
                rounded-full cursor-pointer'>-</button>
            <span className='w-[45%] h-full flex justify-center items-center rounded-lg text-orange-500'>{qty}</span>
            <button className='w-[40%] h-full justify-center items-center rounded-lg hover:bg-black/20 cursor-pointer'>+</button>
          </div>

        </div>
      </div>


      {/* Right div */}
      <div className='flex  items-end  justify-center flex-col gap-5 p-3 w-[40%] h-full'>
        <span className='text-lg text-gray-700 font-semibold'>Rs {price}/-</span>
        <span 
          onClick={()=>dispatch(RemoveItem(id))}
        className='bg-black/20  hover:bg-orange-500/40 text-orange-500 rounded-full p-2 hover:scale-105 transition-all duration-300 cursor-pointer w-10 h-10 flex justify-center items-center'><MdDelete
       className='size-6' /></span>
      </div>
    </div>
  )
}

export default CardSec;