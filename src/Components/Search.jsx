import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Producte from './Producte'

useParams
const Search = ({cart,setCart}) => {
  const {term}=useParams();
  const[filterData,setFilterData]=useState([])
  
  useEffect(()=>{
    const filterdData=()=>{
      const data=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
      setFilterData(data)
    }
    
    filterdData()
   

  },[term])
 
 
  return (
  <>
   <Producte items={filterData}/></>
  )

}
export default Search;
