import "./right.css";
import kura from '../assets/kura.jpg'

import React from 'react'

const Right = () => {
  return (
    <div className="right">
        <div className="profile">
          <div className="img">
            <img className='profileImg' src={kura} alt="" />
          </div>
          <div className="userName">
            <div className="name">K K</div>
            <div className="username2">@k_pika</div>
          </div>
          <div className="switch">switch</div>
        </div>
    </div>
  )
}

export default Right
