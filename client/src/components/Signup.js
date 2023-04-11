import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [errors, setErrors] = useState()
    const navigate = useNavigate()
    const [user, setUser] = useState([])

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,     
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate ('/')
            } else {
                setName("")
                setPassword("")
                const errorLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis)
            }            
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input 
                    type="text"
                    id="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br/>
                <label>Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default Signup