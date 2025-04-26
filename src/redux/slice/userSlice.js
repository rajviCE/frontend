import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profilePic: '/default-profile.png',
    user: null, // Stores full user object if needed
  },
  reducers: {
    setProfilePic: (state, action) => {
      state.profilePic = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload; // Full user object
      if (action.payload?.profilePic) {
        state.profilePic = `http://localhost:5000${action.payload.profilePic}`;
      }
    },
  },
});

export const { setProfilePic, setUser } = userSlice.actions;

export default userSlice.reducer;
