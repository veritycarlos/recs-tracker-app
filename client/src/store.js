import { configureStore } from '@reduxjs/toolkit';

import sessionsReducer from './features/sessionsSlice'
import categoriesReducer from './features/categoriesSlice'
import allCategoriesReducer from './features/allCategoriesSlice'
import recommendationsReducer from './features/recommendationsSlice'
import notesReducer from './features/notesSlice'

const store = configureStore({
    reducer: {
        sessions: sessionsReducer,
        categories: categoriesReducer,
        allCategories: allCategoriesReducer,
        recommendations: recommendationsReducer,
        notes: notesReducer,
    }
});

export default store;