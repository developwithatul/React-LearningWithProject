import { useState } from 'react'
import User from "./User"
import LoginButton from './Component/LoginButton'
import LogOut from './Component/LogOut';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState('');


  // if(isLoggedIn){
  //   return <LogOut />
  // }else{
  //   return <LoginButton />
  // }
 // up side use condition rendering using if else statement but we can also use ternary operator for condition rendering

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
        <User users ={userDetails3}/>
       <br /><hr /><h1 style={ { color: "red", backgroundColor: "yellow"}}>Welcome to learning Condition rendering </h1> <hr />
       <LoginButton />
       <LogOut />
    </div>
  )
}

export default App
