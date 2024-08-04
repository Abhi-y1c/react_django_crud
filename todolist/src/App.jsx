import React from 'react'

// import Todo from './Todo/Todo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Todo/Layout'
import Home from './Todo/Home'
import Insert from './Todo/Insert'
import Display from './Todo/Display'
 



const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Layout/>}>
         <Route Insert element={<Home/>}/>
         <Route path='Home' element={<Home/>}/>
         <Route path='Insert' element={<Insert/>}/>
         <Route path='Display' element={<Display/>}/>
         </Route>
       </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
