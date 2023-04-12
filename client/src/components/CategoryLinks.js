import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryLinks = ({category}) => {

  return (
    <div>
        <nav>
            <NavLink to={`/rec}`}>
                {category.name}
            </NavLink>  
        </nav>
        <br/>
    </div>
    
  )
}

export default CategoryLinks