import React from 'react'
import Headviewall from '../headviewall/headviewall'
import HeadName from '../headname/headname'
import Images from 'next/image'
import { collection } from './categoryData'


const  getData = async (res)=>{
    const posts = await fetch('http://localhost:8000/api/v1/product/viewproduct')
  .then(res => res.json())

return posts
}


async function Collection() {
    
    let posts = await getData()
  return (
    <div className='collection-part'>
      <div className='coll-item'>
        <div className='item-1'>
            <h3>Best 
            Collection</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <a href='#'><button>
                shop now
            </button></a>
        </div>
        <div className='item-head'>
            <Headviewall>
                <HeadName>Featured Products</HeadName>
                <p className='coll-text'>View All</p>
            </Headviewall>
            <div className='item-2'>
                {
                    posts.map((item, i)=> (
                        item.proType == 'feature' &&
                        <div className='item-details' key={i}>
                        <div className='item-img-tag'>
                            <Images src={`http://localhost:8000${item.image[0]}`} width={376} height={333} alt='collection-img'/>
                            <div className='sold-tag'>
                                <p>{item.proType}</p>
                                <p className='coll-discount'>-10%</p>
                            </div>
                            {/* <span className='coll-discount2'>{item.tagout}</span> */}
                        </div>
                        <div className='flash-sec-text'>
                            <h3>{item.name}</h3>
                            <span className='ban-num'>{item.regularprice}</span>
                            <span className='current-num'>{item.discountprice}</span>
                        </div>
                        <div className='add-cart'>
                            <a href='/pages/cart'><button>Add to cart</button></a>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
