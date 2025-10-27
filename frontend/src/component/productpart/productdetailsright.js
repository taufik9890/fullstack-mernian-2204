'use client'

import React, { useState,useEffect } from 'react'
import Images from 'next/image'



 function  Productdetailsright  ({posts,re}) {
  console.log('posts3', posts);
  console.log(re);
  
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]) 
  const handleminusclick = ()=> {
    // setCount(count - 1)
    // if(count == 0){
    //   setCount(0)
    // }
    setCount(prev => (prev > 0 ? prev - 1 : 0))
  }

  const handleplasclick = ()=> {
    // setCount(count + 1)
    setCount(prev => prev + 1)
  }
  
  //  const data = await fetch('http://localhost:8000/api/v1/product/viewproduct')
  // // const posts = await data.json()
  // console.log('product', data);
  
   useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('http://localhost:8000/api/v1/product/viewproduct')
        const data = await res.json()
        setProducts(data)
        console.log('product', data)
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }

    fetchProducts()
  }, [])

  

  return (
    <div className='prdct-dtls-right'>
      <div className='breadcrumb'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/pages/product'>Product</a></li>
          <li>Wireless Microphonesss</li>
        </ul>
      </div>
      <ul>
      {/* {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))} */}
    </ul>

      <div className='ratings'>
        <div className='rate-star'>
          <p>5.0</p>
          <Images src='/rating.png' width={100} height={20} alt='rating-img' />
          <span>Review({re}) | Sold 99</span>
        </div>
        <div className='star-wish'>
          <Images src='/Love (1).png' width={22} height={22} alt='rate-img'/>
          <span>Add to Wishlist</span>
        </div>
      </div>

      <div className='product-heading'>
        <h3>{posts?.[0]?.name || 'No name available'}</h3>
        <div className='rate-percent'>
          {
            posts[0].discountprice ? 
            <>
            <p>${posts[0].regularprice - posts[0].discountprice}</p>
          <span>${posts[0].regularprice}</span>
          <button>Save {Math.floor((posts[0].discountprice/posts[0].regularprice)*100)}%</button>
            </>
            :
            <p>$29.00</p>
          }
          
        </div>
        <div className='delivery-voucher-stock'>
          <div className='delivery'>
              <Images src='/Fast Delivery.svg' width={30} height={30} alt='fast-delivery'/>
              <span>Free Delivery</span>
          </div>
          <div className='delivery'>
              <Images src='/voucher.svg' width={30} height={30} alt='fast-delivery'/>
              <span>Available Voucher</span>
          </div>
          <div className='delivery'>
              <Images src='/Package.svg' width={30} height={30} alt='fast-delivery'/>
              <span>In Stock</span>
          </div>
        </div>
      </div>

      <div className='product-description'>
        <h4>Description</h4>
        <p>{posts[0].description}</p>
        {/* <p>Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p> */}
      </div>

    <div className='qnty-chrt'>
      <div className='quantity'>
          <h3>Quantity</h3>
          <div className='count'>
            <div className='minus' onClick={handleminusclick}>-</div>
            <p>{count}</p>
            <div className='plas' onClick={handleplasclick}>+</div>
          </div>
        </div>

        <div className='chrt'>
          <a href='#'><button className='chart'>Chart</button></a>
          <a href='#'><button className='cart'>Add to Cart</button></a>
        </div>
    </div>
    </div>
  )
}

export default Productdetailsright
