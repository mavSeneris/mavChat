import React from 'react'
import addAvatar from '../img/addAvatar.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export default function Register() {

    function handleSumbit async (e) {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
              
        }
        const res = await createUserWithEmailAndPassword(auth, email, password)
        
    }

   

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Mav Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSumbit}>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <label htmlFor="files">
                        <img src={addAvatar} />
                        <span>Add an avatar</span>
                    </label>
                    <input id="files" style={{ display: "none" }} type="file" multiple placeholder='add an avatar' />
                    <button>Sign up</button>
                    <p>You do have an account? Login</p>
                </form>
            </div>
        </div>
    )
}
