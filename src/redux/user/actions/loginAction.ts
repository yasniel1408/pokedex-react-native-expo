import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIType, UserAuthenticationType } from '../../../types';
import user from '../../../utils/userDB';
import { fetchUser, setError, login } from '../userSlice';

export const loginAction = createAsyncThunk(
    'user/login',
    async (
        { username, password }: UserAuthenticationType,
        { rejectWithValue, dispatch }: ThunkAPIType,
    ) => {
        try {
            dispatch(fetchUser(null));

            // api call
            if (username === user.username && password === user.password) {
                dispatch(login(user));
            } else {
                dispatch(setError('Invalid username or password'));
            }
        } catch (error: any) {
            dispatch(setError(error.response.data));
            rejectWithValue(error.response.data);
        }
    },
);
