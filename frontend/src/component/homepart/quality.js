import React from 'react'
import Images from 'next/image'

function Quality() {
  return (
    <div className='quality-part'>
        <div className='quality-img'>
            <a href='#'>
                <Images src="/Frame 10.png" width={1370} height={429} alt='quality-img'/>
            </a>
        </div>
    </div>
  )
}

export default Quality
