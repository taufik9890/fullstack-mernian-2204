'use client'
import Error from 'next/error'
import Image from 'next/image';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProCard from './ProCard';



async function getData(){
  const res = await fetch("https://fullstack-mernian-2204.onrender.com/api/v1/product/viewproduct")
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

// fetch e jodi ami kono kichu ullek na korbo oitake get akare dhorbe

const Product = async () => {
  const data = await getData()
  console.log(data, "amar data");
  
  return (
    <ProCard data={data}/>
      // data.map((item)=>(
      //   <>
      //   <h1>{item.name}</h1>
      //   <Image
      //   src={`http://localhost:8000${item.image}`}
      //   width={500}
      //   height={500}
      //   alt="Picture of the author"
      // />
      // </>

      // )
      // )
  )
}

export default Product
