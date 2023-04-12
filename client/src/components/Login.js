import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errorList, setErrorList] = useState([])
    const {login} = useContext(UserContext)
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
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

    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <label>  Username: </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> <br/>
            <br/>
            <label>  Password: </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /> <br/>
            <br/>
            <button type="submit">Login</button>
        </form>
    )    
}

export default Login