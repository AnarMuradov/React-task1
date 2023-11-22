import React from 'react'
import "./style.css"
const Header = () => {
  return (
    <header>
        <div className='header'>
            <div className='header-info'>
                <h1>A Bootstrap 5 template for modern businesses</h1>
                <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit!</p>
                <div className='header-btn'>
                    <a href="!" className='get-start'>Get Started</a>
                    <a href="!" className='learn-more'>Learn More</a>
                </div>
            </div>
            <div className='header-image'>
                <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header