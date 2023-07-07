import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="navbar-options">
            <p className='selected-navbar-option'>Job Search</p>
        </div>
        <div className="login-signup">
            <div className="signup">
                <p>Sign Up</p>
            </div>
            <div className="login">
                <p>Login</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar