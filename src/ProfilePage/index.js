import React from 'react'
import { useAuth } from '../Auth/auth'

function ProfilePage() {
  const auth = useAuth();
  console.log(auth.user.username);
  return (
    <>
      <div>
        Welcome, {auth.user.username}
      </div>
    </>
  )
}

export {ProfilePage}