import React from 'react'
import {Link} from 'react-router-dom'

const CategoryLinks = ( {category} ) => {

  return (
    <div>
        <nav>
            <Link to={`/categories/${category.id}}`}>
                {category.name}
            </Link>  
          </nav>
        <br/>
    </div>
    
  )
}

export default CategoryLinks