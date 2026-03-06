import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() { 
  const [display ,setDisplay] = useState(false); 

  return (
    <>
    <div>Toggle in the react</div>
        <button onClick={() => setDisplay(!display)}> Toggle </button>
    {/* {
      display ? <h1>Display is true</h1> : null
      //conditional rendering using ternary operator //hide and show element using state 
    }  */}
    {  
      
      display? <User /> : null
        //conditional rendering using ternary operator //hide and show component using state
    }
    </>
  )
}

export default App
