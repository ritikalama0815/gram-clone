import './left.css';
import React from 'react';  
import logo from '../assets/logo.svg';
import home from '../assets/home.svg';
import search from '../assets/search.svg';
import reels from '../assets/reels.svg';
import messages from '../assets/message.svg';
import explore from '../assets/explore.svg';
import notifications from '../assets/notification.svg';
import create from '../assets/create.svg';
import menu from '../assets/menu.svg';

const Left = () => {
  return (
    <div className="leftpart">
        <div className="logo">
            <img className='logocat' src={logo} alt="logo" />
        </div>
        <div className="content">
            <div className="navLink">
                <img className='home' src={home} alt="home" />
                <div className="contentHome">
                    home
                </div>
            </div>
            {/* ------------------------------------------------------ */}
            <div className="navLink">
                <img className='home' src={reels} alt="reels" />
                <div className="contentHome">
                    scrolls
                </div>
            </div>
             {/* ------------------------------------------------------ */}
            <div className="navLink">
                <img className='home' src={messages} alt="messages" />
                <div className="contentHome">
                    messages
                </div>
            </div>
             {/* ------------------------------------------------------ */}
            <div className="navLink">
                <img className='home' src={search} alt="search" />
                <div className="contentHome">
                    search
                </div>
            </div>
            {/* ------------------------------------------------------ */}
            <div className="navLink">
                <img className='home' src={explore} alt="explore" />
                <div className="contentHome">
                    discover
                </div>
            </div>
            {/* ------------------------------------------------------ */}
            <div className="navLink">
                <img className='home' src={notifications} alt="notification" />
                <div className="contentHome">
                    notification
                </div>
            </div>
            {/* ------------------------------------------------------ */}
            <div className="navLink">
                <img className='home' src={create} alt="create" />
                <div className="contentHome">
                    post
                </div>
            </div>
            {/* ------------------------------------------------------ */}
            <div className="navLink">
                <img className='home' src={menu} alt="menu" />
                <div className="contentHome">
                    menu
                </div>
            </div>
        </div>
    </div>
  )
}

export default Left
