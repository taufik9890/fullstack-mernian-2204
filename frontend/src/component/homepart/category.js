import React from 'react'
import './style.css'
import HeadName from '../headname/headname'
import Images from 'next/image'
import { CategoryData } from './categoryData'



async function getData (res){
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/viewcategory`).then(
    (res)=> res.json()
)
// console.log("Data up",data);

return data
}


export default async function  Category() {
  
  let data = await getData()
  console.log("Data down",data);

   
  return (
    <div className='category-part'>
      <HeadName>Category</HeadName>
      <div className='category-item'>
        {
            data.map((item, i)=>(
              
                item.status == "approve" &&
                <div className='items' key={i}>
                    <img src={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${item.image}`} width={80} height={80} alt='icon_img'/>
                    <p>{item.name}</p>
                </div>
              
            ))
        }
      </div>
    </div>
  )
}
