import React from 'react'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const Producte = ({items,cart,setCart}) => {
  const AddCart=(id,price,title,description,imgSrc)=>{
    const obj={
      id,price,title,description,imgSrc
    }
    setCart([...cart,obj])
    console.log(cart)
    toast.success(' Your Item Added!', {
      position: "top-right",
      autoClose: 1493,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
  return (
    <>
      <ToastContainer
position="top-right"
autoClose={1493}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"


/>

      <div className="container my-5">
      <div className="row">
        {
          items.map((product)=>{
            
            
            return (
              <>
              <div className="col-lg-4 col-md-6 my-2 text-center">
              <div className="card" style={{width: '18rem'}}>

              <Link to={`/product/${product.id}`} style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                <img src={product.imgSrc} className="card-img-top" alt="..." /></Link>
                 
                  <div key={product.id} className="card-body " >
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text ">{product.description}</p>
                    <button className='btn btn-primary mx-4'>{product.price}{" "}₹ </button>
                    <button className='btn btn-warning'
                    onClick={()=>AddCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                    >Add to Card</button>
                  </div>
                </div>

            </div>


          

              </>

            )

          })

        }
          </div>
      </div>
    </>
  )
}

export default Producte
