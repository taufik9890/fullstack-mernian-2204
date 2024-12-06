'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { cartData } from './cartdata';

function Cartleft() {
    const [count, setCount] = useState(0)

    const handleMinus = () => {
        setCount(count - 1)
        if(count == 0){
            setCount(0)
        }
    }

    const handlePlas = () => {
        setCount(count + 1)
    }

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
                            <Image src={item.img} width={130} height={130} alt='cart-img'/>
                        </div>
                        <div className='item-name-price'>
                            <h3>{item.proname}</h3>
                            <p>{item.proprice}</p>
                            <div className='count'>
                                <div className='minus' onClick={handleMinus}>-</div>
                                <div className='numbers'>{count}</div>
                                <div className='plass' onClick={handlePlas}>+</div>
                            </div>
                        </div>
                    </div>
                    <div className='cross'>
                        <RxCross2 className='cros-mark'/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cartleft
