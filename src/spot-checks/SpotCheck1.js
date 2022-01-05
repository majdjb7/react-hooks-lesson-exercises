import React, { useState } from 'react';

export default function SpotCheck1() {
  const [counter, setCounter] = useState(0)
  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)


  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <p>Counter: {counter}</p>
        <div><button onClick={decrease}>-</button></div>
        <div><button onClick={increase}>+</button></div>
      </div>
    </div>
  )
}