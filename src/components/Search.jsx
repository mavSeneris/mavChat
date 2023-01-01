import React from 'react'

export default function Search() {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type="text" placeholder='Find user'/>
        </div>
        <div className='userChat'>
            <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80' />
            <div className='userChatInfo'>
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}
 