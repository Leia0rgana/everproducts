import { configureStore } from '@reduxjs/toolkit'
import buttonReducer from './slices/buttonSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      button: buttonReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
