import React from 'react'

const Cart = (props) => {
  return (
    <div>
        <button className='px-6 py-4 bg-yellow-300 rounded-lg text-black' > Cart {props.size}</button>
    </div>
  )
}

export default Cart