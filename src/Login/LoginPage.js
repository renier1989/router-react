import React from 'react'

function LoginPage() {

const [username , setUsername] = React.useState('');
const login = (e) =>{
    e.preventDefault();
    console.log(username);
}
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <label>UserName: </label>
            <input onChange={e =>setUsername(e.target.value)} /> 
            <button type="submit">Log In</button>
        </form>
    </div>
  )
}

export {LoginPage}