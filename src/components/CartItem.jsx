import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CardSlice'; 

const CartItem = ({item, itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
          dispatch(remove(item.id));
          toast.error("Item Removed");
    }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5 ">

        <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5 border-b-2">

            <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5 ">
                <img className="object-cover " src={item.image}/>
            </div>

            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>

                <div className="flex items-center justify-between">
                   <p className="font-bold text-lg text-green-600">${item.price}</p>
                   <div
                   className="text-red-800  bg-red-200 group hover:bg-red-400 
                   transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                   onClick={removeFromCart}>
                       <FcDeleteDatabase/>
                   </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default CartItem