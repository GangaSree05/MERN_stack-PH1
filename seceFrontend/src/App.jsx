import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/Functionalcomponents/About';
import ClassCompEG from './components/classComponents/ClassCompEG';
import Gallery from './components/Functionalcomponents/Gallery';
import Home from './components/Functionalcomponents/Home';
import Contact from './components/Functionalcomponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/"element={<Home />}></Route>
      <Route path="/about"element={<About />}></Route>
      <Route path="/gallery"element={<Gallery page="Gallery" image="SECE Logo" />}></Route>
      <Route path="/contact"element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
