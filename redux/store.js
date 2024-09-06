import {configureStore} from '@reduxjs/toolkit';
import auth from './slices/auth';

const reducer = {
    auth
}

const store = configureStore({
    reducer
})

export default store;