import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [name, setName] = useState("")
    const [user, setUser] = useState([])
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorList, setErrorList] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                name: name,
                password: password 
            })
        })
        .then(res => res.json())
        .then(user => { 
            if (!user.errors) {
                login(user)
                navigate ('/')
            } else {
                setName("")
                setPassword("")
                const errorLi = user.errors.map(e => <li>{e}</li>)
                setErrorList(errorLi)
            }
        })
    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="name">Username:</label>
                <input 
                    type="text"
                    id="name"
                    placeholder='user_name'
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br/>
                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
            <ul>
                {errorList}
            </ul>
            {/* <button>Don't have an account? Signup Here</button> */}
        </div>
    )
}

export default Login