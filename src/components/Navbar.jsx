import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Mav chat</span>
      <div className='user'>
        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''/>
        <span>Maverick</span>
        <button>logout</button>
      </div>
    </div>
  )
}
