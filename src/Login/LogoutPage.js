import React from 'react'
import { useAuth } from '../Auth/auth';

function LogoutPage() {
    const auth = useAuth();
    const logout = (e) => {
        e.preventDefault();
        auth.logout();
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