import React from 'react'
import { NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { sessionsDeleted } from '../features/sessionsSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessions.entities)
  
    function handleLogout() {
      fetch("/logout", { 
        method: "DELETE", 
      }).then(() => {
          dispatch(sessionsDeleted());
        });
    }

    return (  
        <nav className="nav">
            <NavLink className="rec-tracker" to='/'>
                RecsTracker
            </NavLink>
            <NavLink className="link" to='/categories'>
                Categories
            </NavLink>
            <NavLink className="link" to={"/"}>
                <button onClick={handleLogout}>{user ? "Logout" : ""}</button>
            </NavLink>
        </nav> 
    )
} 

export default Navbar