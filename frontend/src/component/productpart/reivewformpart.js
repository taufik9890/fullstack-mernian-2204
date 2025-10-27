'use client'
import { reviewform } from '@/validationform/Yup';
import { useFormik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react'
import ReviewStar from "review-star";

import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";



function Reivewformpart({posts}) {
  console.log(posts?.posts[0]?._id, 'Toast');
  
  // const [reVal, SetReVal] = useState(0);

const [rating, setRating] = useState(0);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      comment: '',
    },
    validationSchema: reviewform,
    onSubmit: async values => {
      console.log(values);
      const rawResponse = await fetch('http://localhost:8000/api/v1/product/review', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...values, rating: rating, productId: posts?.posts[0]?._id})
  });
  const content = await rawResponse.json();
  console.log(content);
    },
  });

  const {errors, touched} = formik;

//   const ratingChanged = (newRating) => {
//   console.log(newRating)
// }


  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log("New rating:", newRating);
  };

  return (
    <div className='review-form-part'> 
      <div className='form-text'>
        <h4>Add Your Review</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
      </div>
      <div className='form-part'>
        <form onSubmit={formik.handleSubmit}>

          <label>Name*</label>
          <input type='text' placeholder='Type Your Name..' onChange={formik.handleChange} name='name' value={formik.values.name}/>
          {errors.name && touched.name && <p className='cmnt-errors'>{errors.name}</p>}

          
          <label>Email*</label>
          <input type='email' placeholder='Type Your Email..' onChange={formik.handleChange} name='email' value={formik.values.email}/>
          {errors.email && touched.email && <p className='cmnt-errors'>{errors.email}</p>}

          
          <label>Comment*</label>
          <textarea type='text' placeholder='Type Your Comment..' onChange={formik.handleChange} name='comment' value={formik.values.comment}/>
          {errors.comment && touched.comment && <p className='cmnt-errors'>{errors.comment}</p>}

          <div className='form-rating'>
            <p>Rating</p>
            {/* <Image src='/rating 4.png' width={100} height={20} alt='rating'/> */}
            <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
          </div>

          <div>
            <button type='submit' className='submit-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reivewformpart


