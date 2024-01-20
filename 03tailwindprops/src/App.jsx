import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Anna',
    age: 40,
    address: {
      city: 'Minsk',
      state: 'Minsk obl.',
      country: 'Belarus'
    }
  } 
  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className='text-3xl text-white font-bold bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
      <Card username="Nikita" post="Software engineer"/>
      <Card myArr={newArr}/>
    </>
  )
}

export default App
