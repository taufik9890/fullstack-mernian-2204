import React from 'react'
import Container from '../container/Container'
import HomeTopBar from '../homepart/hometopbar'
import FooterElements from '../homepart/footerelements'
import Productdetails from './productdetails'
import Productbottompart from './productbottompart'


const  getData = async (slug)=>{
    const posts = await fetch(`http://localhost:8000/api/v1/product/singlepro/${slug}`)
  .then(res => res.json())
  console.log(posts);
  
return posts
}
const  getReview = async (slug)=>{
    const post = await fetch(`http://localhost:8000/api/v1/product/viewreview/${slug}`)
  .then(res => res.json())
  console.log(post);
  
return post
}


async function ProductPart({slug}) {
  
    let posts = await getData(slug)
    let post = await getReview(posts[0]._id)
    console.log('posts', post.posts.length);
    // console.log('posts', posts);
    
  return (
    <div>      
        <Container>
            <HomeTopBar/>
            <Productdetails posts={posts} re={post.posts.length}/>
            <Productbottompart posts={posts}/>
        </Container>
        <FooterElements/>
    </div>
  )
}

export default ProductPart
