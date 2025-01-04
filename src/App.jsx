import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Scorers from './components/Scorers'
import Matches from './components/Matches'
import Home from './components/Home'
import("./App.css")
const App = () => {



  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path = "/" element = {<Home/>}/>
         <Route path = "/scorers" element = {<Scorers/>}/>
         <Route path = "/matches" element = {<Matches/>}/>
         
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App