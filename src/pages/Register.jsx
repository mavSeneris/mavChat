import React, { useState } from 'react'
import addAvatar from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Register() {
    const [err, setErr] = useState(false)

    async function handleSumbit(e) {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setErr(true)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile();
                    });
                }
            );
        } catch (err) {
            setErr(true)
        }

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
                    {err && <span>Something went wrong.</span>}
                    <p>You do have an account? Login</p>
                </form>
            </div>
        </div>
    )
}
