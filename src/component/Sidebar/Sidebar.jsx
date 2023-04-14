import React from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png'

export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>Lazy<span>B</span>log</span>
        </div>
    </div>
  )
}
