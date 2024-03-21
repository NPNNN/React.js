import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  let myObj = {
    username:"Stacklab.in",
    password:12345678
  }

  let newArr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-600 text-white rounded-xl p4'>Tailwind React</h1>
    <Card username="Stacklab.in" onText="click me"/>
    <Card username="Mumbai.com" onText="Know more about me" pt-4/>
    </>
  )
}

export default App
