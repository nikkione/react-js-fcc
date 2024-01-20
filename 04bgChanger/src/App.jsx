import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('purple')
  
  const randomColor = () => {
    const random = Math.floor(Math.random()*16777215).toString(16);
    setColor(`#${random}`)
  }

  return (
    <div className='w-full h-screen bg-green-100 duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2'>
        <div className='bg-white p-3 rounded-3xl shadow-sm flex gap-5'>
          <button
          onClick={() => {setColor("red")}}
          className='bg-white rounded-full p-3 shadow-md active:shadow-none duration-300'>red</button>
          <button
          onClick={() => {setColor("blue")}}
          className='bg-white rounded-full p-3 shadow-md active:shadow-none duration-300'>blue</button>
          <button
          onClick={() => {setColor("yellow")}}
          className='bg-white rounded-full p-3 shadow-md active:shadow-none duration-300'>yellow</button>
          <button
          onClick={randomColor}
          className='bg-white rounded-full p-3 shadow-md active:shadow-none duration-300'>random</button>
        </div>
      </div>
    </div>
  )
}

export default App
