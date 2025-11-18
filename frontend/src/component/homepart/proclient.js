'use client'
import React from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';


const Proclient = ({posts}) => {
  return (
    <div style={{display: 'flex', gap: 20}}>
        {
          
            posts.map((item, i)=>(
                <Card key={i} style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Image 
      src={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${item.image}`}
      width={285}
      height={285}
      alt='new'
      />
      <Card.Body>
        <Card.Title><Link href={`/product/${item.slug}`}>{item.name}</Link></Card.Title>
          <div dangerouslySetInnerHTML={{__html: item.description}}></div>
          <span>Price: {item.regularprice}</span>
          <br />
          <span>Discount Price: {item.discountprice}</span>
      </Card.Body>
    </Card>
            ))
        }
    </div>
  )
}
export default Proclient
