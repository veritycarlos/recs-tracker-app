import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", () => {
    return fetch("/categories")
        .then((response) => response.json())
        .then((data) => data);
})

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: [], 
        status: "idle",
    },
    reducers: {
        categoryAdded(state, action) {
            state.entities.push(action.payload);
        },
        categoryDeleted(state, action) {
            state.entities.filter((d) => d.id !== action.payload?.id);
            console.log(action.payload)
        },
        stateUpdateReset(state) {
            state.updated = false;
        }
    },
    extraReducers: (builder) => (
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
          })
    )
})

export const { categoryAdded, categoryDeleted, stateUpdateReset} = categoriesSlice.actions;

export default categoriesSlice.reducer;