import React, {useEffect, useState} from 'react'
import CategoryLinks from './CategoryLinks'
import {NavLink} from 'react-router-dom'

function Categories() {
    const[categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    const categoryList = categories.map(c => <CategoryLinks key={c.id} category={c}/>)

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
            {categoryList}
        </div>
        <nav>
        <NavLink to="/categories/new" style={link} >Add Category</NavLink>
        </nav>
        </>
    )
}

export default Categories