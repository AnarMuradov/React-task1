import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
// import { icon } from '@fortawesome/fontawesome-svg-core'
library.add(faRectangleList,faBuilding,faToggleOff)
const Card = ({icon}) => {
  let iconStyles = {  
    width: "50px",
    height: "50px",
    color: "#0d6efd"
  };
  return (
    <div className='card'>
      
        <FontAwesomeIcon icon={icon}  style={iconStyles}/>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
    </div>
  )
}

export default Card