import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { patchRecommendation } from '../features/recommendationsSlice';
import { stateUpdateReset } from '../features/recommendationsSlice';

function RecEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const errors = useSelector(state => state.recommendations.errors)
  const recommendations = useSelector(state => state.recommendations.entities)
  const updated = useSelector(state => state.recommendations.updated)
  const recommendation = recommendations?.find(bottle => bottle.id===parseInt(id))
  const [ formData, setFormData ] = useState({
    category_id: recommendations?.find(recommendation => recommendation.id===parseInt(id))?.category_id,
      name: "",
      year: "",
      info: ""
    });

  useEffect(() => {
    setFormData(recommendation);
  }, [recommendation])

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(patchRecommendation({formData, id}))
  }
  
  useEffect(() => {
    if (updated) {
        navigate(`/recommendations/${id}`)
        dispatch(stateUpdateReset())
    }
  })

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit {recommendation?.name}</h3>
        <div>
          <label htmlFor="name">Name:
            <input
              type="text" 
              id="name"
              value={ formData?.name } 
              onChange={ handleChange }
            /> <br/>
          </label>
          <label htmlFor="year"> Year: 
            <input
              type="integer" 
              id="year"
              value={ formData?.year } 
              onChange={ handleChange }
            /> <br/>
          </label>
          <label htmlFor='info'>Info: </label>
            <input 
              type="text" 
              id="info"
              value={ formData?.info } 
              onChange={ handleChange }
            /> <br/>
        </div>
        <input type="submit" value="Edit Recommendation" />
        {errors ? (errors.map((error) => {return <p>{error}</p>})) : null }
      </form>
    </div>
  )
}

export default RecEdit