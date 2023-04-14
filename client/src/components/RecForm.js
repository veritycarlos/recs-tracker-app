import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { postRecommendation } from '../features/recommendationsSlice';
import { stateUpdateReset } from '../features/recommendationsSlice';
import Login from './Login';

const RecForm = () => {
    const user = useSelector(state => state.sessions.entities)
    const allCategories = useSelector(state => state.allCategories.entities)
    const errors = useSelector(state => state.recommendations.errors)
    const updated = useSelector(state => state.recommendations.updated)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ formData, setFormData ] = useState({
        category_id: "",
        name: "",
        year: "",
        info: "",
      });

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postRecommendation(formData));
    }


    useEffect(() => {
        if (updated) {
          navigate('/categories')
          dispatch(stateUpdateReset())
        }
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    if (!user) return <Login />;

    return (
    <div>
        <h3>Add Recommendation </h3>
         <form onSubmit={ handleSubmit }>
             <div>
                <label htmlFor='name'>Name: </label>
                <input 
                    type="text" 
                    id="name"
                    value={ formData.name } 
                    onChange={ handleChange }
                /> <br/>
            </div>
            <div>
                <label htmlFor="year">Year, if applicable: </label>
                <input
                    type="integer" 
                    id="year"
                    value={ formData.year } 
                    onChange={ handleChange }
                /> <br/>
            </div> 
            <div>
                <label htmlFor='info'>Info: </label>
                <input 
                    type="text" 
                    id="info"
                    value={ formData.info } 
                    onChange={ handleChange }
                /> <br/>
            </div>
            <div>
                <label htmlFor="category_id"> Category: </label>
                <select
                    type="text"
                    id="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                >
                    <option value=""></option>
                    {allCategories.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>
            <br/>
            <input type="submit" value="Add New Recommendation" />
            {errors ? (errors.map((error) => {return <p>{error}</p>})) : null }
        </form>
        <br/>
        <Link to={"/categories/new"}>Add a new category here.</Link>
     </div>
    )
}
export default RecForm