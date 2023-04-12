import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const {user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn) {
        return (
            <nav className="nav">
                <NavLink className="rec-tracker" to='/'>
                    RecsTracker
                </NavLink>
                <ul>
                    <NavLink className="link" to='/categories'> {user.name}'s Recs</NavLink>
                    <NavLink className="link" onClick={logoutUser}>Logout</NavLink>
                </ul>
            </nav>
        )
    } else {
        return (  
            <nav className="nav">
                <NavLink className="rec-tracker" to='/'>
                    RecsTracker
                </NavLink>
                <NavLink className="link" to='/login'>
                    Login
                </NavLink>
                <NavLink className="link" to='/signup'>
                    Signup
                </NavLink>
            </nav> 
        )
    } 
}

export default Navbar