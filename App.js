import React from 'react';
import {useState,useMemo} from 'react';
export function App(props) {
  const [count,setCount] = useState(0);

function handleClick(){
  setCount(count+1)
}

function heavyCalc(input){
  console.log("Inside heavy calc")
  let sum=0;
  for (let i=0;i<=input;i++){
     sum = i+sum;
  }
  return sum;
}

let output = useMemo(function(){
  return heavyCalc(10);
},[])


  return (
    <div className='App'>
      <h1>useMemo</h1>
      <button onClick={handleClick}>Count is {count}</button>
      <h1>Sum is {output}</h1>
    </div>
  );
}

// Log to console
console.log('Hello console')
