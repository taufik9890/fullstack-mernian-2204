import React from 'react'
import Headviewall from '../headviewall/headviewall'
import HeadName from '../headname/headname'
import Images from 'next/image'
import { toprateproduct } from './categoryData'
import Link from 'next/link'
import Button from '@/components/Button'
// import Button from '@/components/Button'

const  getData = async (res)=>{
    const posts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/viewproduct`)
  .then(res => res.json())

return posts
}

async function TopRateProduct() {
    
    let posts = await getData()
  return (
    <div className='top-product'>
        <Headviewall>
            <HeadName>Top Rated Product</HeadName>
            <p className='prdct-view'>View All</p>
        </Headviewall>
        <div className='all-prdct'>
            {

                posts.map((item, i)=>(
                    item.proType == 'top' &&
                    <div className='prdct-item' key={i}>
                    <Images src={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${item.image[0]}`}  width={230} height={290} alt={item.name}/>
                    <div className='product-text'>
                        <h4><Link href={`pages/product/${item.slug}`}>{item.name} </Link></h4>
                        {/* <p>{item.regularprice}</p> */}
                        <div className='star-sold'>
                            <Images src={item.img2} width={15} height={15} alt='star'/>
                            <span> <p><del>{item.regularprice}</del></p> {item.discountprice? (item.regularprice - item.discountprice) : item.regularprice}</span>
                        </div>
                        <div className='btn'>
                            {/* <Button item={item._id}/> */}
                            <Button item={item._id}/>
 
                            <Images src='/love.png' width={24} height={24} style={{marginLeft: "30px"}} alt='love'/>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopRateProduct
