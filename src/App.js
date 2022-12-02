import React, { useState } from 'react'
import './App.css'
import { SearchFilter } from './AllExports'
const App = () => {
  const [color,setColor]=useState(true)
  return (
    <div>
      <p className={color ? 'red':'green'}>hellow haroon</p>
      <button onClick={()=>setColor(!color)}>click</button>
      <SearchFilter/>
    </div>
  )
}

export default App
