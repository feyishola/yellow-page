import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YellowPage from './yellow-page/page'
import Contact from './contact'
import LocateUser from './locateuser'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<YellowPage/> }/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/locateuser' element={<LocateUser/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
