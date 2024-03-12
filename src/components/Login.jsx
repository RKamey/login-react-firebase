/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Imagen from '../assets/loginvector.jpg'
import ImageProfile from '../assets/profile.png'

import appFirebase from '../credentials'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(appFirebase);
const googleProvider = new GoogleAuthProvider(); 

export const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAuth = async(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                alert("La contraseña debe tener más de 8 caracteres y el email debe ser válido")
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                alert("Usuario o contraseña incorrecta")
            }
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            alert("Error al iniciar sesión con Google")
        }
    }

  return (
    <div className='container'>
        <div className='row'>
            { /* Login Form */ }
            <div className='col-md-4'>
                <div className="wrapper">
                    <div className="card card-body">
                        <img src={ImageProfile} alt="Imagen del Perfil" className='style-profile' />
                        <form onSubmit={functAuth}>
                            <input type="text" placeholder='Ingresar Email' className='input-style' id='email'/>
                            <input type="password" placeholder='Ingresar contraseña' className='input-style' id='password' />
                            <button className='btn-form'>{ registrando ? "Regístrate" : "Inicia Sesión" }</button>
                        </form>
                        <button className='btn-form btn-google' onClick={signInWithGoogle}>
                            <img src="../src/assets/google-icon.png" alt="Iniciar sesión con Google" className='google-icon' />
                            <span className='google-text'>Iniciar sesión con Google</span>
                        </button>
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