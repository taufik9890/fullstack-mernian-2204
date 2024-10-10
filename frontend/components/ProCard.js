'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import React from 'react'
import Image from 'next/image';
import Link from 'next/link';





const ProCard = ({data}) => {

    console.log(data);
    
  return (
    data.map((item)=>(
        <Card style={{ width: '18rem' }}>
      <Image
        src={`https://fullstack-mernian-2204.onrender.com${item.image}`}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <Card.Body>
        <Card.Title><Link href={`/product/${item.slug}`}>{item.name}</Link></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    ))
  )
}

export default ProCard
