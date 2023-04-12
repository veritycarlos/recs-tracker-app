import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup' ,{
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
                <input type="submit" />
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default Signup