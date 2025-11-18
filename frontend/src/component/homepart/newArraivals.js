
import React from 'react'
import HeadName from '../headname/headname'
import Headviewall from '../headviewall/headviewall'
import './style.css'
import Image from 'next/image'
import { newArraivals } from './categoryData'

const  getData = async (res)=>{
    const posts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/viewproduct`)
  .then(res => res.json())

return posts
}

async function  NewArraivals() {
    let posts = await getData()
  return (
    <div className='arrivals-part'>
        <Headviewall>
            <HeadName>New Arraivals</HeadName>
            <p className='view-text'>View All</p>
        </Headviewall>
        <div className='arraivals-items'>
            {
                posts.map((item, i)=>(
                    item.proType == 'new'  &&
                    
                    <div className='items-list' key={i}>
                        <div className='items-img'>
                            
                            <Image src={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${item.image[0]}`}  width={230} height={290} alt={item.name}/> 
                            {/* <img src={`http://localhost:8000${Array.isArray(item.image) ? item.image[0] : item.image}`} alt="" /> */}
                            <div className='item-tag'>
                                {item.proType}
                            </div>
                        </div>
                        <div className='item-text'>
                            <h4>{item.name}</h4>
                            <h3>{item.regularprice} tk</h3>
                            <div className='rating'>
                                {/* <Images src={item.star} width={20} height={20} alt='star'/> */}
                                <p>{item.discountprice} tk</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewArraivals
