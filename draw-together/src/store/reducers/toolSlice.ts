import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Tool} from "../../drawingTools";


interface IToolState {
    currTool: Tool | null
}

const initialState : IToolState = {
    currTool: null
}

const toolSlice = createSlice({
    name: 'currTool',
    initialState,
    reducers: {
        setTool: (state, action: PayloadAction<Tool>) => {
            state.currTool = action.payload as any
        }
    }
})


export const {setTool} = toolSlice.actions
export const toolReducer = toolSlice.reducer