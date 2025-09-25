import React from 'react'
import Proclient from './proclient'


const  getData = async (res)=>{
    // const data = await fetch("http://localhost:8000/api/v1/product/viewproduct").then(
    //     (res)=> res.json()
    // )
    // console.log('everything', data);
    // return data
    const data = await fetch('http://localhost:8000/api/v1/product/viewproduct')
  const posts = await data.json()
  return posts

}

const  Procard = async () => {
    let posts = await getData()
    // console.log('posts', posts);
    // console.log(params);
    
  return (
    <Proclient posts={posts}/>
    // <div>
    //   <h1>procard</h1>
    //   {
    //     posts.map((item, i)=>(
    //         <div className="product">
    //             <h3>{item.name}</h3>
    //         </div>
    //     ))
    //   }
    // </div>
  )
}

export default Procard
