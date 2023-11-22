import React from 'react'
import Card from './Card'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
const Cards = () => {
  return (
    <div className='cards'>
        <Card icon="fa-rectangle-list"/>
        <Card icon="fa-building"/>
        <Card icon="fa-toggle-off"/>
        <Card icon="fa-toggle-off"/>
    </div>
  )
}

export default Cards