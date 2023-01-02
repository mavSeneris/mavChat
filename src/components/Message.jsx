import React from 'react'

export default function Message() {
  return (
    <div className='message'>
      <div className='messageInfo'>
        <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' alt='' />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src='https://images.unsplash.com/photo-1672528792530-e0fb0c86cccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'/>
      </div>
    </div>
  )
}
