import React from 'react'
import Headviewall from '../headviewall/headviewall'
import HeadName from '../headname/headname'
import Images from 'next/image'
import { toprateproduct } from './categoryData'

function TopRateProduct() {
  return (
    <div className='top-product'>
        <Headviewall>
            <HeadName>Top Rated Product</HeadName>
            <p className='prdct-view'>View All</p>
        </Headviewall>
        <div className='all-prdct'>
            {
                toprateproduct.map((item, i)=>(
                    <div className='prdct-item' key={i}>
                    <Images src={item.img} width={247} height={247} style={{borderRadius: "15px"}} alt='product-img'/>
                    <div className='product-text'>
                        <h4>{item.headname}</h4>
                        <p>{item.money}</p>
                        <div className='star-sold'>
                            <Images src={item.img2} width={15} height={15} alt='star'/>
                            <span>{item.sold}</span>
                        </div>
                        <div className='btn'>
                            <a href='/pages/cart'><button>Add to Cart</button></a>
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
