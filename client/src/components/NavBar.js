import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [user, setUser] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    // const [errors, setErrors] = useState()
    const navigate = useNavigate

    useEffect(() => {
        fetch(`/users/id`)
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
            }
        })
    }, [])

    // const login = (user) => {
    //     setUser(user)
    //     setLoggedIn(true)
    // }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

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
            <>
            <nav className="nav">
                <NavLink className="rec-tracker" to='/'>
                    RecsTracker
                </NavLink>
                <ul>
                    <NavLink className="link" to='/rec'>Rec</NavLink>
                    <NavLink className="link" onClick={logoutUser}>Logout</NavLink>
                </ul>
            </nav>
                {/* <h1> Welcome {user.name}</h1> */}
            </>
        )
    } else {
        return (  
            <nav className="nav">
                <NavLink className="link" to='/'>
                    Home
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