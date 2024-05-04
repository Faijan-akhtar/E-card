import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({cart,setCart}) => {
  return (
    <>
      <div className="container my-3 "style={{width:'50%'}}>
        { cart.length ==0 ?(
<>
<div className='text-center'>
  <h1>Your Card is Empty</h1>
  <Link to={'/'} className='btn btn-warning'>Continue Shoping...</Link>
</div>
</>
        ):

          cart.map((product)=>{
            return(
              <>
              <div className="card mb-3 my-3" style={{maxWidth: '700px'}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{product.tital}</h5>
          <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mx-4'>{product.price}{" "}₹ </button>
                      <button className='btn btn-warning'
                     
                      >Buy Now</button>
        </div>
      </div>
    </div>
         </div>
              </>
            )
          })}
        
       
  

</div>

{
          cart.length!==0 &&(
            <div className="container text-center my-4" style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
              
              }}>
                <button className='btn btn-warning mx-3' >
                  CheckOut
                </button>
                <button className='btn btn-danger'  onClick={()=>setCart("")}>
                  Clear Cart
                </button>
              </div>
          )
        }
       



      
    </>
  )
}

export default Card
