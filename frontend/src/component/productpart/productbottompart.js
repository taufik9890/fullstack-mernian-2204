import React from 'react'
import Reviewpart from './reviewpart'
import Reivewformpart from './reivewformpart'

function Productbottompart(posts) {
  return (
    <div className='prdct-btm-part'>
      <Reviewpart posts={posts}/>
      <Reivewformpart posts={posts}/>
    </div>
  )
}

export default Productbottompart
