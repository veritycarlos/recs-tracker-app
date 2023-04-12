import React, {useState, useContext} from 'react'
import { UserContext} from '../context/user'

const CategoryForm = () => {
    const [name, setName] = useState("");
    const {addCategory, errors} = useContext(UserContext)

    const handleSubmit = e => {
        e.preventDefault();
        addCategory({
            name: name
        })
    }

  return (
    <div>
        <h3>Add Category </h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    value={ name } 
                    onChange={(e) => setName(e.target.value)}
                /> <br/>
            </div> 
            <br/>
            <input type="submit" value="Add New Category" />
            {errors ? (errors.map((error) => {return <p >{error}</p>})) : null }
        </form>

    </div>
  )
}

export default CategoryForm