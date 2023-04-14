import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { postAllCategory } from '../features/allCategoriesSlice'
import { stateUpdateReset } from '../features/allCategoriesSlice';
import { useNavigate } from 'react-router-dom';

const CategoryForm = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector(state => state.allCategories.errors)
    const updated = useSelector(state => state.allCategories.updated)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(postAllCategory(name))
    }

    useEffect(() => {
        if (updated) {
            navigate('/recommendations/new');
            dispatch(stateUpdateReset());
        }
    })

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
            {errors ? <p >{errors}</p> : null }
        </form>

    </div>
    )
}

export default CategoryForm