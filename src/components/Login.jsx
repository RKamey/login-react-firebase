/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Imagen from '../assets/loginvector.jpg'
import ImageProfile from '../assets/profile.png'

import appFirebase from '../credentials'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);

export const Login = () => {

    const [registrando, setRegistrando] = useState(false)

  return (
    <div className='container'>
        <div className='row'>
            { /* Login Form */ }
            <div className='col-md-4'>
                <div className="wrapper">
                    <div className="card card-body">
                        <img src={ImageProfile} alt="Imagen del Perfil" className='style-profile' />
                        <form>
                            <input type="text" placeholder='Ingresar Email' className='input-style'/>
                            <input type="password" placeholder='Ingresar contraseña' className='input-style' />
                            <button className='btn-form'>{ registrando ? "Regístrate" : "Inicia Sesión" }</button>
                        </form>
                        <h4 className='text'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btn-switch' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesíon" : "Regístrate"}</button> </h4>
                    </div>
                </div>
            </div>
            { /* Image */ }
            <div className='col-md-8'>
                <img src={Imagen} alt='Login' className='img-login' />
            </div>
        </div>
    </div>
  )
}

export default Login