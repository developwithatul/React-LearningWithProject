import React from 'react'

const LoginButton = () => {
  return (
    <div >
      <button style={buttonStyle}>Login</button>
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

export default LoginButton
