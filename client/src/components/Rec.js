import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRecommendation } from '../features/recommendationsSlice';
import { stateUpdateReset } from '../features/recommendationsSlice';


const Rec = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const notes = useSelector(state => state.notes.entities);
    const recommendations = useSelector(state => state.recommendations.entities);
    const updated = useSelector(state => state.recommendations.updated);
    const recommendation = recommendations?.find(recommendation => recommendation.id===parseInt(id));
    const recommendationNotes = notes.filter(n => n.recommendation_id===parseInt(id));

    const handleDelete = () => {
        dispatch(deleteRecommendation(id))
    }

    useEffect(() => {
        if (updated) {
            navigate('/categories')
            dispatch(stateUpdateReset())
        }
      })
  
    return (
        <div>
            <h1>{recommendation?.name}</h1>
            <div>
                <hr/>
                <p>Name: {recommendation?.name} </p>
                <p>Year: {recommendation?.year}</p>
                <p>Info: {recommendation?.info}</p>
                <hr/>
            </div>
            <Link to={`/recommendations/${id}/edit`}>
                Edit Recommendation
            </Link>
            <br/>
            <br/>
            <Link to={`/recommendations/${id}/notes/new`}>
                Add New Note
            </Link>
            <br/>
            <br/>
            <button onClick={handleDelete} >Delete Recommendation</button>
            {recommendationNotes?.map(n => (
                <h3 key={n.id}>{n.note}</h3>
            ))}
        </div>
    )
}

export default Rec