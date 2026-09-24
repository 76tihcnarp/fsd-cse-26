import React from 'react'
import { useState } from 'react'
import "../App.css";

const Counter = () => {
    const[count, setcount]=useState(0)
   
function Increment(){
    setcount(count+1);
    console.log(count);
}
function Decrement(){
    setcount(count-1);
    console.log(count);
}
  return (
    <div>
      <button onClick={Decrement}>-</button>
      <h2>{count}</h2>
      <button onClick={Increment}>+</button>
    </div>
  )
}

export default Counter
