import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecommendations = createAsyncThunk("recommendations/fetchRecommendations", () => {
    return fetch("/recommendations")
        .then((response) => response.json())
        .then((data) => data);
})

export const postRecommendation = createAsyncThunk("recommendations/postRecommendation", (formData) => {
    return fetch("/recommendations", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)})
        .then((response) => response.json())
        .then((data) => (data))
})

export const patchRecommendation = createAsyncThunk("recommendations/patchRecommendation", ({formData, id}) => {
    return fetch(`/recommendations/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)})
        .then((response) => response.json())
        .then((data) => (data))
})

export const deleteRecommendation = createAsyncThunk("recommendations/deleteRecommendation", (id) => {
    return fetch(`/recommendations/${id}`, { method: "DELETE" })
        .then((response) => (response.data))
})

const recommendationsSlice = createSlice({
    name: "recommendations",
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
        .addCase(fetchRecommendations.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchRecommendations.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
          })
        .addCase(postRecommendation.pending, (state) => {
            state.status = "loading";
          })
        .addCase(postRecommendation.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities.push(action.payload);
                state.status = "idle";
                state.updated = true;
                state.errors = []
            }
          })
        .addCase(patchRecommendation.pending, (state) => {
            state.status = "loading";
          })
        .addCase(patchRecommendation.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities = state.entities.map(r => r.id === action.payload.id ? {...r, ...action.payload} : r);
                state.status = "idle";
                state.updated = true;
                state.errors = []
            }
          })
        .addCase(deleteRecommendation.pending, (state) => {
            state.status = "loading";
          })
        .addCase(deleteRecommendation.fulfilled, (state, action) => {
            state.entities = state.entities.filter((r) => r.id !== parseInt(action.meta.arg));
            state.status = "idle";
            state.updated = true;
          })
    )
})

export const { recommendationDeleted, stateUpdateReset } = recommendationsSlice.actions;

export default recommendationsSlice.reducer;