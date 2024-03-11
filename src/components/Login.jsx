/* eslint-disable no-unused-vars */
import React from 'react'
import Imagen from '../assets/loginvector.jpg'
import ImageProfile from '../assets/profile.png'

export const Login = () => {
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
                            <button className='btn-form'>Registrarse</button>
                        </form>
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