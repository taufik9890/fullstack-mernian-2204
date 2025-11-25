'use client'
import React from 'react' 

const Button = ({item}) => {
  console.log(item);
  let handleClick = (id)=>{
    console.log(id);
    fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/cart`, {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
        productId: id,
        userId: '66389eba72e0ae8d6ed351de'
    }),
    
})
.then(response => response.json())
.then(json => console.log(json));
  }


  return (
    <div>
      <button onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
  )
}

export default Button
 