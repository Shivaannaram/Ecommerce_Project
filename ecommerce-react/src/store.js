
import {configureStore} from '@reduxjs/toolkit';
import UserSlice from './UserSlice';

const store=configureStore({
    reducer:{
        isUser:UserSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store;