// 'use client'
import React from 'react'

const Button = ({item}) => {
  console.log(item);
  let handleClick = (id)=>{
    console.log(id);
    
  }
  return (
    <div>
      <button onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
  )
}

export default Button
