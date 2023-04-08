import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate

    return (
        <div>
            <NavLink to='/'>
                <button>Home</button>
            </NavLink>
            <NavLink to='/rec'>
                <button>Rec</button>
            </NavLink>
        </div>
    )
}

export default Navbar