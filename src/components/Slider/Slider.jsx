/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react"
import Arrows from "./Arrows/Arrows";

export const SliderContext = createContext();

export function Slider({items}){
    const [currentIndex, setCurrentIndex] = useState(0);


    
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    }

    return(
        <div className="slider">
            <SliderContext.Provider value={{
                goToNext,
                goToPrev
            }}
            >
                <Arrows />
            </SliderContext.Provider>
        </div>
    )
}