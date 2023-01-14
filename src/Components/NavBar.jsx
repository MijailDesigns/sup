import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{backgroundColor: 'lightBlue'}}>
        <button><Link to='/subtitulo'>Ir subtitulo</Link></button>
        <button><Link to='/'>Ir home</Link></button>
    </div>
  )
}

export default NavBar