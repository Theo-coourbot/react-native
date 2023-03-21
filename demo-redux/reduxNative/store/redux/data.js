import { createSlice } from "@reduxjs/toolkit";


 const data = createSlice({
    name : 'data',
    initialState : {
        ids : ['0','1','2','3','4','5']
    },
    reducers : {
        addIds : (state,action) => {
            state.ids.push(action.payload)
        },
        removeIds : (state,action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})

export const addIds = data.actions.addIds
export const removeIds = data.actions.removeIds

export default data.reducer