import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../features/courses/courseSlice'
import loginReducer from '../features/auth/authSlice'
import { signupReducer } from '../features/auth/signupSlice';

const store = configureStore({
     reducer: {
        auth:loginReducer,
        signup:signupReducer,
        courses:courseReducer
     }
})

export default store;