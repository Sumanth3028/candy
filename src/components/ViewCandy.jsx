import React from 'react'

const ViewCandy = (props) => {


  return (

    <>
    
    <div className='bg-yellow-100 items-center text-center w-full h-full'>
        <h1 className='text-xl py-4'>Candy Details</h1>
        <table className='bg-gray-400 text-black rounded-sm mx-auto'>
            <thead className=''>
                <tr>
                <th className='px-[100px] py-2 border '>Candy name</th>
                <th className='px-[100px] py-2 border '>Candy Desc</th>
                <th className='px-[100px] py-2 border '>Candy Price</th>
                <th className='px-[100px] py-2 border '>Add</th>
                </tr>
                
            </thead>
            <tbody>

                {props.data.map((candy)=> (
                  <tr><td>{candy.candyName}</td>
                <td>{candy.candyDesc}</td>
                <td>{candy.candyPrice}</td>
                <td><button onClick={(e)=>props.addCandyCartHandler(e)} key={candy._id} id={candy._id} className='px-2 mx-2 py-2 bg-yellow-300 rounded-lg text-black'>Buy 1</button> 
                <button onClick={(e)=>{props.addCandyCartHandler(e)
                props.addCandyCartHandler(e)}} key={candy._id} id={candy._id} className='px-2 py-2 mx-2 bg-yellow-300 rounded-lg text-black'>Buy 2</button>
                <button onClick={(e)=>{props.addCandyCartHandler(e)
                props.addCandyCartHandler(e)
                props.addCandyCartHandler(e)
                }} key={candy._id} id={candy._id} className='px-2 py-2 mx-2 bg-yellow-300 rounded-lg text-black'>Buy 3</button>
                
                
                </td>
                
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ViewCandy