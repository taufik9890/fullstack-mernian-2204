'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
// import { cartData } from './cartdata';

function Cartleft({setCartTotal}) {
    const [count, setCount] = useState(0)
    const [cartData, setCartData] = useState([])
    const [update, setUpdate] = useState(true)

    const handleMinus = (id) => {
        
        fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/cart?type=minus`, {
    method: "POST",
    body: JSON.stringify({
        productId: id,
        userId: '66389eba72e0ae8d6ed351de'
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => setUpdate(!update));
    }

    const handlePlus = (id) => {

        fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/cart?type=plus`, {
    method: "POST",
    body: JSON.stringify({
        productId: id,
        userId: '66389eba72e0ae8d6ed351de'
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => setUpdate(!update));

    }

    const handleDelete =(id)=>{
        console.log(id);
        
        fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/deletecart/${id}`)
.then(response => response.json())
.then(json => setUpdate(!update));
    }

    useEffect(()=>{
        async function allcart(){
            const posts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/viewcart`)
            .then(res => res.json())
            console.log(posts);
            setCartData(posts) 
            const total = posts.reduce((sum, item)=>{
                const price = item.productId.regularprice - item.productId.discountprice
                return sum + (price * item.quantity)
            }, 0)
            setCartTotal(total)
        }
        allcart()
    },[update, setCartTotal])

 
  return (
    <div className='cart-left-part'>
        <div className='chec-box'>
            <input type='checkbox' id='select'/>
            <label htmlFor='select'>Select All</label>
        </div>
        {
            cartData.map((item, i)=>(
                <div className='cart-items' key={i}>
                    <div className='select'>
                        <input type='checkbox' id='select'/>
                    </div>
                    <div className='details'>
                        <div className='cart-imgs'>
                            {/* {console.log(item)} */}
                            <Image src={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${item.productId.image[0]}`} width={130} height={130} alt={item.productId.name}/>
                        </div>
                        <div className='item-name-price'>
                            <h3>{item.productId.name}</h3>
                            <p>{item.productId.regularprice - item.productId.discountprice} tk</p>
                            <p>Total: {item.quantity > 0 && item.quantity * item.productId.regularprice - item.productId.discountprice} tk</p>
                            <div className='count'>
                                <div className='minus' onClick={()=>handleMinus(item.productId)}>-</div>
                                <div className='numbers'>{item.quantity}</div>
                                <div className='plus' onClick={()=>handlePlus(item.productId)}>+</div>
                            </div>
                        </div>
                    </div>
                    <div className='cross'>
                        <RxCross2 onClick={()=>handleDelete(item._id)} className='cros-mark'/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cartleft
