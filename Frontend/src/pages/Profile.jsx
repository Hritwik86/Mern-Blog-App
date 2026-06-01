import React from 'react'
import { useAuthPart } from '../contexts/AuthContext'

const Profile = () => {
const{user, logIn, logout} = useAuthPart();
console.log(user); // 👈 Add here
  return (
    // <div>Profile Page</div>
    <>
    <h2 className='text-blue font-extrabold'>Context Api Text</h2>
    <p>
      User:{user ? user.name: "No User have been Found Recently"};
    </p>
    <button className onClick={() => {
      logIn({
      name:"Hritwik",
      })
    }} className='text-blue p-2 m-2 bg-slate-800 text-white'>Log In</button>
    <button onClick={logout} className='text-blue p-2 bg-slate-800 text-white'>Log Out</button>
    </>
  )
}

export default Profile