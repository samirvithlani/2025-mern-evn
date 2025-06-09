import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export const ProductComponent = () => {
  //hook
  const dispatch = useDispatch()
  return (
    <div style={{textAlign:"center"}}>
        <h1>PRODUCT COMPONENT</h1>
        <div className='row'>
            <div className='card'>
                <h1>IPHONE 15</h1>
                <p>PRICE = 999</p>
                <button onClick={()=>{dispatch(addToCart({name:"iphon15",price:999}))}}>ADD TO CART</button>
            </div>
            <div className='card'>
                <h1>IPHONE 16</h1>
                <p>PRICE = 1999</p>
                <button onClick={()=>{dispatch(addToCart({name:"iphon16",price:1999}))}}>ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}
