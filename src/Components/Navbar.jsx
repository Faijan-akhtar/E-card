import React, { useState } from 'react'
import{Link, useLocation, useNavigate} from 'react-router-dom'
import { items } from './Data'
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({setData,cart}) => {
const location=useLocation()
const [searchTerm,setSearchTerm]=useState("")
const navigate=useNavigate()

  const filterbycategory=(category)=>{
    const element=items.filter((product)=>product.category===category)
  //  console.log(element)
    setData(element)
  }
  const filterbyPrice=(price)=>{
    const element=items.filter((product)=>product.price>=price)
    setData(element);
  }
  
  const HandalSubmit=(e)=>{
    
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")

  }
  

  return (
    <>
     <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">E-cart</Link>
            <form className="search-bar" onSubmit={HandalSubmit}>
                <input type='text'
                 placeholder='Search Product'
                  value={searchTerm}
                 onChange={(e)=>setSearchTerm(e.target.value)}/>
            </form>

            <Link to={'/card'} className="cards">
            <button type="button" className="btn btn-primary position-relative">
             <FaCartArrowDown />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                
              </span>
            </button>



            </Link>
        </div>
        {
          location.pathname=='/' && (  <div className="nav-bar-wrapper">
          <div className="item">Filter by{"->"}</div>
              <div className="item" onClick={()=>setData(items)}>No Filter</div>
              <div className="item" onClick={()=>filterbycategory('mobiles')}>
                Mobiels</div>
              <div   className="item" onClick={()=>filterbycategory('laptops')}>Laptop</div>
              <div   className="item" onClick={()=>filterbycategory('tablets')}>Tablets</div>
              <div   className="item" onClick={()=>filterbyPrice(29999)} >{">="}29999</div>
              <div   className="item"  onClick={()=>filterbyPrice(49999)}>{">="}49999</div>
              <div   className="item"  onClick={()=>filterbyPrice(69999)}>{">="}69999</div>
              <div   className="item"  onClick={()=>filterbyPrice(89999)}>{">="}899999</div>
          </div>)
        }
      
     </header>  
    </>
  )
}

export default Navbar
