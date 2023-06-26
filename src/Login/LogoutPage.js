import React from 'react'

function LogoutPage() {

    const logout = (e) => {
        e.preventDefault();
        console.log('logout here!');
    }

  return (
    <div>
        <h1>LogOut</h1>
        <form onSubmit={logout}>
            <label>Sure you wanna LogOut? </label>
            
            <button type="submit">Log Out</button>
        </form>
    </div>
  )
}

export {LogoutPage}