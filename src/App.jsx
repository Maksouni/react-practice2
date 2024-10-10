/* eslint-disable no-unused-vars */
import './App.css'
import Button from './components/Button/Button'
import NavBar from './components/NavBar/NavBar'
import LandingPageSlider from './components/Slider/Slider'
import Slide from './components/Slider/Slide.jsx'


function App() {
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
    <>
      <header><NavBar /></header>
      <LandingPageSlider items={slides}/>
      {/* <Slide startup="Startup 5" title="Forget About Code" text="blablabla"></Slide> */}
      
    </>
  )
}

export default App
