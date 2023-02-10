import {combineReducers, configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({

})


export const setupStore = () =>  {
    return configureStore ({
        reducer: rootReducer,
    })
}


export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType =AppStoreType['dispatch']
