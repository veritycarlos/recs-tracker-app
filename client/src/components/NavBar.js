import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [user, setUser] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [errors, setErrors] = useState()
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
            <div>
                <NavLink to='/'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/rec'>
                    <button>Rec</button>
                </NavLink>
            </div>
            <div>
                <button onClick={logoutUser}>Logout</button>
                <hr/>
                <h1>Welcome {user.username}</h1>
                <NavLink to='/plants'>
                    <button>Plants</button>
                </NavLink>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div>
                <NavLink to='/'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/rec'>
                    <button>Rec</button>
                </NavLink>
            </div>
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
                <hr/>
            </div>
            </>
        )
    } 

}

export default Navbar