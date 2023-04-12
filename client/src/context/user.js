import React, { useState, useEffect} from 'react'
import {useParams, useNavigate, Navigate } from 'react-router-dom'

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
    const [category, setCategory] = useState([])
    const [categories, setCategories] = useState([])
    const [errors, setErrors] = useState()

    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                getCategories()
            }
        })
    }, [])

    const getCategories = () => {
        fetch('/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    }

    const addCategory = (category) => {
        fetch('/category', {
            method: 'POST',
            headers: { 'Content-Type': 'applicatoin/json' },
            body: JSON.stringify(category)
        })
        .then(res => {
            if (res.ok) {
                res.json().then((data) => setCategories([...categories, data]))
                Navigate('/categories')
            } else {
                res.json().then((err) => setErrors(err.error))
            }
        })
    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, setCategories, setCategory, categories, category, addCategory, errors }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }; 