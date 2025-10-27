import ProductPart from '@/component/productpart'
import React from 'react'

function Productpage({params}) {
  console.log(params.slug);
  
  return (
    <div>
        <ProductPart slug={params.slug}/>
    </div>
  )
}

export default Productpage
