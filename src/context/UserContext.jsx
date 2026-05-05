import React, { createContext, useState } from 'react'
import food_items from '../food';
export const dataContext = createContext();
const UserContext = ({ children }) => {
    const [cate, setCate] = useState(food_items);
    const [input, setInput] = useState("");
    const data = {
        input,
        setInput,
        cate,
        setCate
    }
    return (
        <div>
            <dataContext.Provider value={data}>
                {children} // children yaha per app hai
            </dataContext.Provider>
        </div>
    )
}

export default UserContext