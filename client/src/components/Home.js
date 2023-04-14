import React from "react";
import { useSelector } from 'react-redux';
import Login from './Login';

function Home() {
    const user = useSelector(state => state.sessions.entities)

    if (!user) return <Login />;
    
    return (
        <div className="home-div">
            <br/>
            <div className="counter"><br />Welcome {user.name}!</div>
            {/* <p className="home-p">Please Login or Signup</p>
            <h1 className="home-title" >Home</h1>
            <p className="home-p">RecsTracker is a website that will help you keep track of all the fun movies, games, books, restaurant, and more, that you've been meaning to try. If you don't have an account, simply sign up by clicking the link above. </p> */}
        </div>
    )
}

export default Home