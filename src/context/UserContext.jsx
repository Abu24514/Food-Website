import React, { createContext, useState } from 'react'
import food_items from '../food';
export const dataContext = createContext();
const UserContext = ({ children }) => {
    const [cate, setCate] = useState(food_items);
    const [input, setInput] = useState("");
    const [showCart , setShowCart] = useState(false)
    const data = {
        input,
        setInput,
        cate,
        setCate,
        showCart,
        setShowCart,
    }
    return (
       
        <div>
            <dataContext.Provider value={data}>
                {/*  children yaha per app hai */}
                {children} 
            </dataContext.Provider>
        </div>
    )
}

export default UserContext