/* eslint-disable no-unused-vars */
import './App.css'
import Button from './components/Button/Button'
import NavBar from './components/NavBar/NavBar'
import Slide from './components/Slider/Slide/Slide'
import { Slider } from './components/Slider/Slider'

function App() {
  return (
    <>
      <header><NavBar /></header>
      {/* <Slider items={{}} /> */}
      <Slide 
        startup='Startup 3' 
        title='Forget About Code' 
        text='Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ' 
      />
    </>
  )
}

export default App
