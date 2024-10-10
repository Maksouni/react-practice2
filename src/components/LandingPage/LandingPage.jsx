import Button from "../Button/Button";
import Slide from "../Slider/Slide";
import LandingPageSlider from "../Slider/Slider";
import './styles.scss'


export default function LandingPage() {
    const slideData = [
        {
            startup: "Startup 1",
            title: "Forget About Code",
            text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. "
        },
        {
            startup: "Startup 2",
            title: "Forget About Code",
            text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. "
        },
        {
            startup: "Startup 3",
            title: "Forget About Code",
            text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. "
        },
        {
            startup: "Startup 4",
            title: "Forget About Code",
            text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. "
        },
        {
            startup: "Startup 5",
            title: "Forget About Code",
            text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. "
        },
    ]

    const slides = slideData.map((slide, index) => (
        <Slide key={index} startup={slide.startup} title={slide.title} text={slide.text} />
    ));
    return (
        <div className="landing">
            <div className="content">
                <LandingPageSlider items={slides} />
                <Button text='Create an Account' width='230px'/>
            </div>
        </div>
    )
}