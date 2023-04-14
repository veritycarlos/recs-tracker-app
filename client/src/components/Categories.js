import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CategoryLinks from './CategoryLinks'
import Login from './Login';
import { fetchCategories } from '../features/categoriesSlice'

function Categories() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessions.entities)
    const categories = useSelector(state => state.categories.entities)
    // const recommendations = useSelector(state => state.recommendations.entities)

    const categoryList = () => categories?.map(c => <CategoryLinks key={c.id} category={c}/>)
    // const recLinks = () => categoryRecs.map(r => <RecLinks key={r.id} recommendation={r}/>)
    // useEffect(() => {
    //     dispatch(fetchCategories())
    // }, [dispatch])
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    if (!user) return <Login />;



    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'white',
        background: 'black'
    }

    return (
        <>
            <div>
                <h1>Categories</h1>
                {categoryList()}
            </div>

            <nav>
            <NavLink to="/recommendations/new" style={link} >Add Recommendation</NavLink>
            </nav>
        </>
    )
}

export default Categories