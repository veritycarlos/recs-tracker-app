import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postSignup, postSession } from '../features/sessionsSlice';
import { stateUpdateReset } from '../features/sessionsSlice';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errors = useSelector(state => state.sessions.errors)
    const updated = useSelector(state => state.sessions.updated)
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postSignup({ name, password }))
    }

    useEffect(() => {
        if (updated) {
            dispatch(postSession({ name, password }))
            navigate('/');
            dispatch(stateUpdateReset());
        }
      })

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
            {errors ? (errors.map((error) => {return <p className="errors">{error}</p>})) : null}
            </ul>
        </div>
    )
}

export default Signup