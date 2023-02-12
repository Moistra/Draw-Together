import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ICanvasState {
    canvas: HTMLCanvasElement | null
}

const initialState : ICanvasState = {
    canvas: null
}

const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setCanvas: (state, action: PayloadAction<HTMLCanvasElement>) => {
            state.canvas = action.payload as any;
        }
    }
})


export const {setCanvas} = canvasSlice.actions
export const canvasReducer = canvasSlice.reducer