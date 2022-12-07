import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer
  })
}
export type StateType = ReturnType<typeof rootReducer>
export type StoreType = ReturnType<typeof setupStore>
export type DispatchType = StoreType['dispatch']