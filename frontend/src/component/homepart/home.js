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

function Homepart() {
  return (
    <div>
      <Container>
        <HomeTopBar/>
        <Hero/>
        <Category/>
        <NewArraivals/>
        <Procard/>
        <FlashSale/>
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
