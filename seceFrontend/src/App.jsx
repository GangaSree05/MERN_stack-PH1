import { useState } from 'react'

import './App.css'
import About from './assets/components/classComponents/Functional Components/About'
import ClassCompEG from './assets/components/classComponents/ClassCompEG'
import Home from './assets/components/classComponents/Functional Components/home'
import Gallery from './assets/components/classComponents/Functional Components/Gallery'
//import Contact from './assets/components/classComponents/Functional Components/contact'

function App() {

  return (
    <>
      <div>
        <Home/>
      <About/>
      <ClassCompEG/>
      <h2>Without props</h2>
      <Gallery page="Gallery" image="SECE Logo"/>
      <h2>With props</h2>
      <Gallery page="Gallery" image="SECE Logo"/>
     
      </div>
    </>
  )
}

export default App
