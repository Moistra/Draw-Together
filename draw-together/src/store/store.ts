import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {canvasReducer} from "./reducers/canvasSlice";



const rootReducer = combineReducers({
    canvasSnapShots: canvasReducer
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
export type AppDispatchType = AppStoreType['dispatch']
