// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { postSession } from '../features/sessionsSlice.js';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postSession } from '../features/sessionsSlice';


// function Login() {
//     const [name, setName] = useState("")
//     const [password, setPassword] = useState("")
//     const dispatch = useDispatch();
//     const errors = useSelector(state => state.sessions.error)

function Login() {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.sessions.error)
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");

  
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postSession({ name, password }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br/>
                <label>  Name: </label>
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
                 {errors ? <p >{errors}</p> : null}
             </form>
             <Link to={"/signup"}>Don't have an account? Signup here</Link>
         </div>
    )    
}

export default Login