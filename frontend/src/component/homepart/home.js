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
export const dynamic = 'force-dynamic';

// const  getData = async ()=>{
//     const posts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/viewflashsale`, {
//       next: { revalidate: 60 }  
//     }).then(res => res.json()) 
//     return posts
// }

const getData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/viewflashsale`, {
      next: { revalidate: 60 }  
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch flash sale data');
    }
    
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching flash sale:', error);
    return []; // Return empty array as fallback
  }
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
