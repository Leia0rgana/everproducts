import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IButtonClicked {
  isClicked: boolean
}

const initialState: IButtonClicked = {
  isClicked: false,
}

export const buttonSlice = createSlice({
  initialState,
  name: 'button',
  reducers: {
    toggleButton: (state) => {
      state.isClicked = !state.isClicked
    },
  },
})

export const { toggleButton } = buttonSlice.actions
export const selectIsButtonClicked = (state: RootState) =>
  state.button.isClicked
export default buttonSlice.reducer
