import React, { useContext } from "react";
import { UserContext } from "../context/user";

function Home() {
    const { user, loggedIn } = useContext(UserContext)
    
    if (loggedIn){
        return(
            <div className="home-div">
                <h1 className="home-title" >Welcome {user.name}!</h1>
            </div>
        )
    } else {
        return (
            <div className="home-div">
                <br/>
                <p className="home-p">Please Login or Signup</p>
                <h1 className="home-title" >Home</h1>
                <p className="home-p">RecsTracker is a website that will help you keep track of all the fun movies, games, books, restaurant, and more, that you've been meaning to try. If you don't have an account, simply sign up by clicking the link above. </p>
            </div>
        )
    }

}

export default Home