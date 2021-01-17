import React from "react"

const handleChange = (e, fn) => {
  const amount = e.target.value
  console.log(amount)
  fn(+amount)
}

const AmountSelector = ({ stock, setAmount, inCart }) => {
  return (
    <div className='amount-selector'>
      <select
        name='amount'
        id='amount'
        onChange={(e) => handleChange(e, setAmount)}>
        {inCart && <option value='0'>0 (Delete)</option>}

        {new Array(stock).fill(0).map((item, index) => (
          <option value={index + 1} key={index}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  )
}

AmountSelector.defaultProps = {
  inCart: false,
}

export default AmountSelector
