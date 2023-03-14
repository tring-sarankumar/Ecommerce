import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='brands'>
            <Link to="/axor"> Axor </Link>
            <Link to="/smk"> SMK </Link>
            <Link to="/re"> Royal Enfield </Link>
   </div>
  )
}

export default Sidebar
