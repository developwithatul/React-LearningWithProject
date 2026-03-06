import React from 'react'

const TODOcomponent = () => {
    function handleClick() {
        alert("Button clicked! this is TODO component");
    }
  return (
    <div className="container">
      <h1>Hello TODO Component</h1>
      <img src="https://media.istockphoto.com/id/1419988769/photo/porsche-911-turbo-s.jpg?s=2048x2048&w=is&k=20&c=7PVmCvUszDe_m2yctD-yJmllM7Xhlt2zhfLLVs9DiJY=" alt="Porsche 911 Turbo S" />
    <ul>
        <li>hello mai ak trader  hu </li>
        <li>hello mai ak trader  hu </li>
        <li>hello mai ak trader  hu </li>
     </ul>
     <button onClick={handleClick}>Add TODO</button>
    </div>
  )
}

export default TODOcomponent
