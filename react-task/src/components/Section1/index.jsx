import React from 'react'
import "./style.css"
import Cards from '../Cards'
const Section1 = () => {
  return (
    <section>
        <div className='sct-1'>
            <div className='buiding-sct'>
                <div className='content'>A better way to start building.</div>
                <div className='box'>
                    <Cards/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1