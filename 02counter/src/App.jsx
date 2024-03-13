import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  
 //let counter = 15
 const addValue = () => {
   //counter = counter+1;
   if (counter<20) {
    setCounter(counter+1);
   }else{
    console.log("value should not greter than 20")
   }
   
   //console.log("Clicked",counter);
 }
  const removeValue = () =>{
    if (counter>0) {
      setCounter(counter-1);
    }else{
      console.log("Value should not less the zero")
    }
    

  }
  return (
    <>
     <h1>Stacklab aur React</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value{counter}</button>
     <br />
     <button onClick={removeValue}>Remove value{counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
