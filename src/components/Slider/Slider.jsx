import { createContext } from "react";
import { useState } from "react";
import Arrows from './Arrows'
import SlidesList from './Slides/SlidesList'
import Dots from './Dots/Dots'

export const SliderContext = createContext();

export default function Slider(){
    const [slide, setSlide] = useState(0)
    const items = [
        {
            startup: "Startup 3",
            title: "Forget About Code",
            text: "Blablablablablablablablablablablablabla"
        },
        {
            startup: "Startup 4",
            title: "Forget About Code",
            text: "Blablablablablablablablablablablablabla"
        },
        {
            startup: "Startup 5",
            title: "Forget About Code",
            text: "Blablablablablablablablablablablablabla"
        },
        {
            startup: "Startup 6",
            title: "Forget About Code",
            text: "Blablablablablablablablablablablablabla"
        }
    ];

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if(slide + direction < 0){
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length
        }

        setSlide(slideNumber)
    }

    const goToSlide = (number) => {
        setSlide(number % items.length);
      };


    return(
        <div className="slider">
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                  }}
            >
                <Arrows />
                <SlidesList />
                <Dots />
            </SliderContext.Provider>
        </div>
    )
}