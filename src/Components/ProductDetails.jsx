import React, { useEffect, useState } from 'react'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Producte from './Producte'
useParams
const ProductDetails = ({cart,setCart}) => {
    const{id}=useParams()
    const[product,setProduct]=useState({})
    const[relatedProducts,setrelatedProducts]=useState([])
     useEffect(() => {
    
        const filterProduct=items.filter((product)=>product.id==id)
         
        setProduct(filterProduct[0]);
        const relatedProducts=items.filter((suman)=>suman.category===product.category)
        console.log(relatedProducts)
        setrelatedProducts(relatedProducts)
        
     },[id,product.category]);

     const AddCart=(id,price,title,description,imgSrc)=>{
      const obj={
        id,price,title,description,imgSrc
      };
      setCart([...cart,obj])
      console.log(cart)
      toast.success(' Your Item Added!', {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    }

  return (
    <>
<ToastContainer
position="top-right"
autoClose={1400}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"


/>

      <div className="container  con">
        <div className="img">
            <img src={product.imgSrc} alt=''/>
        </div>
     
      <div className='text-center'>
                   <h1 className="card-title">{product.title}</h1>
                    <p className="card-text ">{product.description}</p>
                    <button className='btn btn-primary mx-3'>{product.price}{" "}₹ </button>
                    <button className='btn btn-warning'
                    onClick={()=>AddCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                    >Add to Card</button>
      </div>
      </div>
      <h1 className='text-center'>Related Product</h1>
      <Producte cart={cart}  setCart={setCart} items={relatedProducts}/>
    </>
  )
}

export default ProductDetails
