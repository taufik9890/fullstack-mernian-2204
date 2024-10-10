import Image from 'next/image'
import React from 'react'



async function getData(params){
  const res = await fetch(`https://fullstack-mernian-2204.onrender.com/api/v1/product/singlepro/${params.slug}`)
  if(!res.ok){
    throw new Error("failed to fetch data")
  }
  return res.json()
  
}


const  ProName = async ({params}) => {
  console.log(params);
  
  const data = await getData(params)
  console.log(data);
  
  return (

    <div>
      {
        data.map((item)=>(
          <>
          <h1>{item.name}</h1>
          <h4>{item.description}</h4>
          <Image src={item.image} width={300} height={300}/>
          
          </>
        ))
      }
    </div>
  )
}

export default  ProName
