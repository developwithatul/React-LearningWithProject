import { useState } from 'react'
import User from "./User"

function App() {
  // let UserName = "Rhul yadve" ;
  // let Age ="25";
  // let Email = "rahul234@gmail.com"
  
  // use object  ,,how to access
  let usersDetails = {
  name : "Rahul Yadve",
  age : "25",
  email : "rahul234@gmail.com"
};
let userDetails2 = {
  name : "Atul Kumar Chakrawarti",
  age : "24",
  email : "chakrawartiatul654@gmail.com"
};
let userDetails3 = {
  name : "Atul Chakrawarti",
  age : "24",
  email : "chakrawartiatu654@gmail.com"
};
console.log(usersDetails)
console.log(userDetails2)
console.log(userDetails3)

  return (
    <div>
       <h1>hello learning react-APP </h1> <hr />
       {/* <User name = "Atul Kumar Chakrawarti " age ="24" email ="chakrawartiatul654@gmail.com" /> */}
       {/* <User name={UserName} age= {Age} email ={Email}/> */}
        <User users ={usersDetails}/> <hr />
        <User users ={userDetails2}/> <hr />
        <User users ={userDetails3}/> <hr />
    </div>
  )
}

export default App
