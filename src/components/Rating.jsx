import React from "react"
import PropTypes from "prop-types"

const Rating = ({ value, text }) => {
  const stars = [1, 2, 3, 4, 5].map((n) => (
    <span key={n}>
      <i
        className={
          value >= n
            ? "fas fa-star"
            : value >= n - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
  ))
  return (
    <div className="rating my-3">
      {stars}
      <span className="ml-2">{text}</span>
    </div>
  )
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default Rating
