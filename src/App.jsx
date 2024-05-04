import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Producte from './Components/Producte'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
import Search from './Components/Search'
import Card from './Components/Card'
import { items } from './Components/Data'

const App = () => {
  const [data,setData]=useState([...items])
  const [cart,setCart]=useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path='/' element={<Producte items={data} cart={cart} setCart={setCart}/>}/>
      <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart} />}/>
      <Route path='/search/:term' element={<Search cart={cart} setCart={setCart} />}/>
      <Route path='/card' element={<Card  cart={cart} setCart={setCart} />}/>
    </Routes>
   
    </Router>
    
    </> 
  )
}

export default App
