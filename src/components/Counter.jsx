import React, { useEffect, useState } from 'react'

const Counter = ({quantity,updateQuantity}) => {
  const [userInput, setUserInput] = useState(quantity);
  
  useEffect(() => {
    updateQuantity(userInput)
  },[userInput])

  return (
    <div className='is-flex'>
      <button className="is-flex is-center is-align-center dir-column" onClick={() => updateQuantity(quantity - 1)}>
        -
      </button>
      <input type="number" value={userInput}  onChange={(e) => setUserInput(e.target.value)}/>
      <button className="is-flex is-center is-align-center dir-column" onClick={() => updateQuantity(quantity + 1)}>
        +
      </button>
    </div>
  )
}

export default Counter