import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RecLinks from './RecLinks'

function Category() {
    const { id } = useParams();
    const recommendations = useSelector(state => state.recommendations.entities)
    const categories = useSelector(state => state.categories.entities)
    const categoryRecs = recommendations.filter(r => r.category_id===parseInt(id))
    const category = categories?.find(c => c.id===parseInt(id))
   

    const recLinks = () => categoryRecs.map(r => <RecLinks key={r.id} recommendation={r}/>)

    return (
    <div>
        <h1>{category?.name}</h1>
        {recLinks()}
    </div>
    )
}

export default Category