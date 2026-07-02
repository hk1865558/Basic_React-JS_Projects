import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("grey")
  return (
    <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3
         shadow-lg bg-amber-200 px-3 py-2 rounded-2xl'>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-red-500'
           onClick={()=> setColor("Red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-yellow-500'
           onClick={()=> setColor("Yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-green-500'
           onClick={()=> setColor("Green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-blue-500'
           onClick={()=> setColor("Blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-orange-500'
           onClick={()=> setColor("Orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-purple-500'
           onClick={()=> setColor("Purple")}>Purple</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-cyan-300'
           onClick={()=> setColor("Cyan")}>Cyan</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-gray-500'
           onClick={()=> setColor("gray")}>Gray</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-black'
           onClick={()=> setColor("black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded-xl
           text-white shadow-2xl bg-pink-500'
           onClick={()=> setColor("Pink")}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
