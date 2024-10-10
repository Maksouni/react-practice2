/* eslint-disable no-unused-vars */
import './App.css'
import Button from './components/Button/Button'
import NavBar from './components/NavBar/NavBar'
import LandingPageSlider from './components/Slider/Slider'
import Slide from './components/Slider/Slide.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'


function App() {
  

  return (
    <>
      <header><NavBar /></header>
      <LandingPage />
      {/* <Slide startup="Startup 5" title="Forget About Code" text="blablabla"></Slide> */}
      
    </>
  )
}

export default App
