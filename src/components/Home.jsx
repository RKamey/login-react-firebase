/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appFirebase from '../credentials'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase);

export const Home = ({userEmail}) => {
  return (
    <div>
       <h2 className='text-center'>Bienvenido {userEmail} <button className='btn btn-danger' onClick={()=>signOut(auth)}>Logout</button> </h2>
    </div>
  )
}

export default Home