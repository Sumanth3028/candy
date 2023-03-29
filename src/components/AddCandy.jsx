import React, { useState,useRef } from 'react'
import { addCandyService } from '../services'

const AddCandy = (props) => {
    let candyData
    const candyName=useRef('')
    const candyDesc=useRef('')
    const candyPrice=useRef('')

    const submitHandler=(event)=>
    {
        event.preventDefault();
        candyData = {
            candyName:candyName.current.value,
            candyDesc:candyDesc.current.value,
            candyPrice:candyPrice.current.value

        }
        console.log(candyData)
        addCandyService(candyData);
        props.fetchData()

    }

  return (
    <div>
        <div>
            <form onSubmit={submitHandler} className='px-2 py-[70px]'>
                <input ref={candyName}   className='mx-2 text-xl h-[50px] w-[400px]' type="text" placeholder='enter candy name' />
                <input ref={candyDesc} className='mx-2 text-xl h-[50px] w-[400px]' type="text" placeholder='enter candy desc' />
                <input ref={candyPrice} className='mx-2 text-xl h-[50px] w-[100px]' type="number" placeholder='price' />
                <button className='px-9 py-3 my-4 text-xl bg-black text-white'>Add</button>
                
            </form>
        </div>
    </div>
  )
}

export default AddCandy