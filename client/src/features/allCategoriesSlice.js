import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllCategories = createAsyncThunk("allCategories/fetchAllCategories", () => {
    return fetch("/all")
        .then((response) => response.json())
        .then((data) => data);
})

export const postAllCategory = createAsyncThunk("allCategories/postAllCategory", (name) => {
    return fetch("/categories", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({name}),
    })
        .then((response) => response.json())
        .then((data) => (data));
})

const allCategoriesSlice = createSlice({
    name: "allCategories",
    initialState: {
        entities: [], 
        errors: null,
        updated: false,
        status: "idle",
    },
    reducers: {
        stateUpdateReset(state) {
            state.updated = false;
            
        },
    },
    extraReducers: (builder) => (
        builder
        .addCase(fetchAllCategories.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
          })
        .addCase(postAllCategory.pending, (state) => {
            state.status = "loading";
          })
        .addCase(postAllCategory.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities.push(action.payload);
                state.status = "idle";
                state.updated = true;
                state.errors = null;
            }
          })
    )
})

export const { stateUpdateReset } = allCategoriesSlice.actions;

export default allCategoriesSlice.reducer;