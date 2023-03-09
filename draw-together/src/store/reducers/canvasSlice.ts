import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ICanvasState {
    canvas: HTMLCanvasElement | null,
    undoList: string[],
    redoList: string[]
}

const initialState: ICanvasState = {
    canvas: null,
    undoList: [],
    redoList: []
}

const canvasSlice = createSlice({
    name: 'canvasSnapShots',
    initialState,
    reducers: {
        setStoreCanvas: (state, action: PayloadAction<HTMLCanvasElement>) => {
            state.canvas = action.payload as any;
        },
        pushToUndoList: (state, action: PayloadAction<string>) => {
            state.undoList = [...state.undoList, action.payload]

            console.log(`push to undo ${state.undoList.length}`)
        },
        pushToRedoList: (state, action: PayloadAction<string>) => {
            state.redoList = [...state.redoList, action.payload]
            console.log(`push to redo ${state.undoList.length}`)
        },
        undo: (state, action: PayloadAction<HTMLCanvasElement>) => {
            console.log('undo!')
            if (state.undoList.length > 1) {
                let context = action.payload.getContext('2d')
                let snapShot: string = state.undoList[state.undoList.length - 2]
                state.redoList = [...state.redoList, snapShot]
                state.undoList.pop()
                const img = new Image()
                img.src = snapShot
                img.onload = () => {
                    if (context) {
                        context.clearRect(0, 0, action.payload.width, action.payload.height)
                        context.drawImage(img, 0, 0, action.payload.width, action.payload.height)
                    }
                }
            } else {
                let context = action.payload.getContext('2d')
                if (context)
                    context.clearRect(0, 0, action.payload.width, action.payload.height)
                state.undoList = []
            }
        },
        redo: (state, action: PayloadAction<HTMLCanvasElement>) => {
            console.log(`before redo ${state.redoList.length}`)
            if (state.redoList.length > 0) {
                let context = action.payload.getContext('2d')
                let snapShot: string = state.redoList[state.redoList.length - 1]
                state.undoList = [...state.undoList, snapShot]
                state.redoList.pop()
                const img = new Image()
                img.src = snapShot
                img.onload = () => {
                    if (context) {
                        context.clearRect(0, 0, action.payload.width, action.payload.height)
                        context.drawImage(img, 0, 0, action.payload.width, action.payload.height)
                    }
                }
            }
            console.log(`after redo ${state.redoList.length}`)
            console.log(`after redo undo  ${state.undoList.length}`)
        }

    }
})


export const {setStoreCanvas, pushToUndoList, undo, redo} = canvasSlice.actions
export const canvasReducer = canvasSlice.reducer