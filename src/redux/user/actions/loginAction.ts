/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIType, UserAuthenticationType, UserType } from '../../../types';
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
            const currentUser: UserType = user;
            if (username === currentUser.username && password === currentUser.password) {
                dispatch(login(currentUser));
                return currentUser;
            }
            dispatch(setError('Invalid username or password'));
        } catch (error: any) {
            dispatch(setError(error.response.data));
            rejectWithValue(error.response.data);
        }
    },
);
