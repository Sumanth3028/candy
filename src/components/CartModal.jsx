import React from "react";

const CartModal = (props) => {
    
    const numberOfCartItems = props.cartCandyData.reduce((curNumber, item) => {
        
        return parseInt(curNumber) + parseInt(item.data.candyPrice);
      }, 0);

  return (
    <div className="text-left flex justify-end">
      <div className="bg-green-300 fixed text-black h-[400px] w-[300px] justify-between">
        <h1>Cart Items</h1>
        <div>
          {props.cartCandyData.map((can) => (
            <h1>{can.data.candyName} {can.data.candyPrice}</h1>
          ))}
          <h1>Total Amount : {numberOfCartItems} </h1> 

       
        </div>

        <button onClick={props.close} className="px-2 py-2 bg-black text-white">
          X
        </button>
      </div>
    </div>
  );
};

export default CartModal;
