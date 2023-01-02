import React from 'react'
import Attach from '../img/attach.png'
import Img from '../img/img.png'


export default function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something'/>
      <div className='send'>
        <img src={Attach} alt=''/>
        <label htmlFor='file'>
          <img src={Img}/>
        </label>
        <input id='file' type='file' style={{display: 'none'}} multiple/>
        <button>Send</button>
      </div>
    </div>
  )
}
