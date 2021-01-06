import React from "react"
import PropTypes from "prop-types"

const Rating = ({ rating, reviews }) => {
  const stars = [1, 2, 3, 4, 5].map((n) => (
    <span key={n}>
      <i
        className={
          rating >= n
            ? "fas fa-star"
            : rating >= n - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
  ))
  return (
    <div className='rating my-3'>
      {stars}
      <span className='ml-2'>{reviews} reviews</span>
    </div>
  )
}

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.number,
}

export default Rating
