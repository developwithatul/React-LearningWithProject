import React from 'react'

const LogOut = () => {
  return (
    <div>
      <button style={buttonStyle}>Log Out</button>
    </div>
  )
}
const buttonStyle = {
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  height: "10vh",
  width : "10vw"
}

export default LogOut
