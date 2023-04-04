import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <NavLink to='/'>
                <button>Home</button>
            </NavLink>
        </div>
    )
}

export default Navbar