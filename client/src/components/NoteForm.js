import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postNote } from '../features/notesSlice';
import { stateUpdateReset } from '../features/notesSlice';

function NoteForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const errors = useSelector(state => state.notes.errors)
    const recommendations = useSelector(state => state.recommendations.entities)
    const updated = useSelector(state => state.notes.updated)
    const recommendation = recommendations.find(r => r.id===parseInt(id))
    const [ formData, setFormData ] = useState({
        recommendation_id: id,
        note: "",
      });

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postNote(formData))
      }

    useEffect(() => {
      if (updated) {
        navigate(`/recommendations/${id}`);
        dispatch(stateUpdateReset());
      }
    })

      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
        
        console.log(recommendations)
      }

  return (
    <div>
      <h3> Add a note for {recommendation?.name} : </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="note"> Note: </label>
            <input 
              type="text"
              id="note"
              value={formData.note}
              onChange={handleChange}
            />
        </div>
        <button type="submit">Submit</button>
        {errors ? (errors.map((error) => {return <p className="errors">{error}</p>})) : null}
      </form>
    </div>
  )
}

export default NoteForm