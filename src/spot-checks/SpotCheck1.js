import React, { useState } from 'react';

export default function SpotCheck1() {
  // your code here
  const [counter, setCounter] = useState(1)
  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)


  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        {/* your code here... */}
        <p>Counter: {counter}</p>
        <div><button onClick={decrease}>Decrease</button></div>
        <div><button onClick={increase}>Increase</button></div>
      </div>
    </div>
  )
}