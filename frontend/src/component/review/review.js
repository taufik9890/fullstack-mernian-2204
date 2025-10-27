'use client'
import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
const Review = ({ count = 0, onRatingChange }) => {

     const [rating, setRating] = useState(count);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    if (onRatingChange) onRatingChange(newRating); // Pass rating to parent
  };
  return (
    <div>
      <ReactStars
    count={5}                // total stars
        value={rating}           // current rating
        onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
    </div>
  )
}

export default Review
