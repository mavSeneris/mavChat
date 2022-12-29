import React from 'react'

export default function Register() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Mav Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type="file" placeholder='add an avatar' />
                    <button>Sign up</button>
                    <p>You do have an account? Register</p>

                </form>
            </div>
        </div>


    )
}
