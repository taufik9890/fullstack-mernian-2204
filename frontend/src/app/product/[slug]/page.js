import React from "react";
import ViewProduct from "@/components/viewProduct/page";
import { Container } from "react-bootstrap";

const  getData = async (params)=>{
    const data = await fetch(`http://localhost:8000/api/v1/product/singlepro/${params.slug}`)
  const posts = await data.json()
  return posts

}


const Product = async ({params}) => {
  
    let posts = await getData(params)
    console.log('params', params);
    // console.log('posts', posts);
  return(<>
  {/* <Container> 
    <ViewProduct posts={posts}/>
  </Container> */}
  <div>
    {
      posts.map((item, i)=>(
        <div key={i}> 
        <h2>{item.name}</h2>
        <h2>{item.description}</h2>
        </div>
      ))
    }
  </div>
  </>);
};

export default Product;
