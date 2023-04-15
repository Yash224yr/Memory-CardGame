import React, { createContext, useState } from 'react'
import Card from './Card'
import Start from './Start'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import End from './End';
export const cardcontext = createContext(null)

function Memory() {
    const [moves, setmoves] = useState(0)
    const [timer, settimer] = useState(30)
    
    return (
        <cardcontext.Provider value={{moves, setmoves, timer, settimer}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Start />}></Route>
                    <Route path='card' element={<Card />}></Route>
                    <Route path='end' element={<End />}></Route>
                </Routes>
            </BrowserRouter>
        </cardcontext.Provider>

    )
}

export default Memory