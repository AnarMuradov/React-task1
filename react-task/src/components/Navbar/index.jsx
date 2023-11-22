import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <nav>
        <div className='navbar'>
            <div className='nav-name'>
            Start Bootstrap
            </div>
            <div className='nav-item'>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>Blog <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li>Portfolio <FontAwesomeIcon icon={faCaretDown} /></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar