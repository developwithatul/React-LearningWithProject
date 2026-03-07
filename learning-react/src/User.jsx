function User ( {users}){
    return(
        <div>
          <h1> hello react learning props </h1> <hr />

          <h2>Name: {users.name}</h2>
          <h2>Age: {users.age}</h2>
          <h2>Email: {users.email}</h2> <hr />
          
    </div> 

    ) 
}
export default User ;