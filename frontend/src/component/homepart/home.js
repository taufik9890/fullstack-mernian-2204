import React from 'react'
import HomeTopBar from './hometopbar'
import Hero from './heropart'
import Category from './category'
import NewArraivals from './newArraivals'
import FlashSale from './flashsale'
import Companyname from './companyname'
import Quality from './quality'
import Collection from './collection'
import TopRateProduct from './toprateproduct'
import FooterElements from './footerelements'
import Container from '../container/Container'
import Procard from './procard'

const  getData = async ()=>{
    const posts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/viewflashsale`).then(res => res.json())

return posts
}

 
async function Homepart() {
  let posts = await getData()
  console.log('new Post', posts);
  
  return (
    <div>
      <Container>
        <HomeTopBar/>
        <Hero/>
        <Category/>
        <NewArraivals/>
        {/* <Procard/> */}
        <FlashSale posts={posts}/>
        <Companyname/>
        <Quality/>
        <Collection/>
        <TopRateProduct/>
      </Container>
      <FooterElements/>
    </div>
  )
}

export default Homepart
