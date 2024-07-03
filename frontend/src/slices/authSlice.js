import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userinfo: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userinfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo= null;
            localStorage.removeItem('userInfo')
        }
    }
})

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;




