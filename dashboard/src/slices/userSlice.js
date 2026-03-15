import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
  },
  reducers: {
    activeUser: (state, action) => {
      state.value = action.payload
    },
    removeUser: (state) => { 
      state.value = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { activeUser, removeUser} = userSlice.actions

export default userSlice.reducer