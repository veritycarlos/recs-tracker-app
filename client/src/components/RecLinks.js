import React from 'react'
import { NavLink } from 'react-router-dom'

const RecLinks = ({recommendation}) => {

  return (
    <div>
        <nav>
            <NavLink to={`/recommendations/${recommendation.id}`}>
                {recommendation.name}
            </NavLink>  
        </nav>
        <br/>
    </div>
  )
}

export default RecLinks