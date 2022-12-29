import React from 'react'
import addAvatar from '../img/addAvatar.png'

export default function Register() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Mav Chat</span>
                <span className='title'>Login</span>
                <form>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input id="files" style={{display: "none"}} type="file" multiple placeholder='add an avatar' />
                    <button>Sign up</button>
                    <p>You don't have an account? Register</p>

                </form>
            </div>
        </div>


    )
}
