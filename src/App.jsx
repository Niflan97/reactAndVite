import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaAngleDoubleDown, FaAngleDown } from 'react-icons/fa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          This project made by React and Vite
        </h1>
      </div>
      
      <div className="card">
        <p>Click here to increase count</p>
        <FaAngleDoubleDown/><br/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <code>niflanMHD1</code> 
        </p>
      </div>
      
    </>
  )
}

export default App
