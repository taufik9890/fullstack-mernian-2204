import Cartpart from '@/component/cartpart'
import React from 'react'


// const  getData = async (res)=>{
//     const posts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product//viewcart`)
//   .then(res => res.json())

// return posts
// }


function CartPage() {

  return (
    <div>
      <Cartpart/>
    </div>
  )
}

export default CartPage
