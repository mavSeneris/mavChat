import React from 'react'
import addAvatar from '../img/addAvatar.png'

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
                    <label htmlFor="files">
                        <img src={addAvatar}/>
                        <span>Add an avatar</span>
                    </label>
                    <input id="files" style={{display: "none"}} type="file" multiple placeholder='add an avatar' />
                    <button>Sign up</button>
                    <p>You do have an account? Login</p>

                </form>
            </div>
        </div>


    )
}
