'use client'
import React from 'react'
import Images from 'next/image'
import { commentdata } from './productdata'
import ReactStars from "react-rating-stars-component";
import Review from '../review/review';
import commentImg from "../../../public/comment.jpg"
const  getData = async (slug)=>{
    const post = await fetch(`http://localhost:8000/api/v1/product/viewreview/${slug}`)
  .then(res => res.json())

return post
}


async function Reviewpart({posts}) {
    console.log(posts?.posts[0]?._id, 'Post 5');
    
    let post = await getData(posts?.posts[0]?._id)
    console.log(post.posts);
    
  return (
    <div className='review-part'>
        <div className='review-tag'>
            <p>({post.posts.length})Review</p>
            <p>Description</p>
            <p>Discusion</p>
            <p>Gift Cards</p>
        </div>
        <div className='comment-list' >
            {
                post?.posts?.map((item, i)=>(
                    <div className='tag-comment' key={i}>
                        <div className='cmnt-element'>
                            <div className='cmnt-img-rate'>
                                <div className='img'>
                                    <Images src={commentImg} width={56} height={56} alt='comment-img'/>
                                </div>
                                <div className='review-text'>
                                    <h4>{item.name}</h4>
                                    <div className='rating'>
                                        {/* <p>{item.rating}</p> */}
                                        <Review  count={item.rating} 
                                        onRatingChange={(newRating) => console.log('User rated:', newRating)} />
                                        <p className='rate-timing'>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <p className='cmnt'>
                                {item.comment} 
                            </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Reviewpart
