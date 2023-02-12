import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {canvasReducer} from "./reducers/canvasSlice";
import {toolReducer} from "./reducers/toolSlice";


const rootReducer = combineReducers({
    canvas: canvasReducer,
    currTool: toolReducer
})


export const setupStore = () =>  {
    return configureStore ({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({serializableCheck:false})
    })
}


export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType =AppStoreType['dispatch']
