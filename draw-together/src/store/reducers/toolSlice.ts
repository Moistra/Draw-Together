import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITool} from '../../models/toolsInterfaces'


interface IToolState {
    currTool: ITool | null
}

const initialState : IToolState = {
    currTool: null
}

const toolSlice = createSlice({
    name: 'currTool',
    initialState,
    reducers: {
        setTool: (state, action: PayloadAction<ITool>) => {
            state.currTool = action.payload as any
        }
    }
})


export const {setTool} = toolSlice.actions
export const toolReducer = toolSlice.reducer