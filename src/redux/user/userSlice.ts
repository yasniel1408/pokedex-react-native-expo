import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { UserInitialStateType, UserType } from '../../types';

export const userSlice: Slice = createSlice({
    name: 'user',
    initialState: {
        user: {} as UserType,
        loggedIn: false as boolean,
        loading: false as boolean,
        error: '' as string,
    },
    reducers: {
        fetchUser: (state: UserInitialStateType) => {
            state.loading = true;
            state.error = '';
        },
        login: (state: UserInitialStateType, action: PayloadAction<UserType>) => {
            state.user = action.payload;
            state.loading = false;
            state.loggedIn = true;
        },
        logout: (state: UserInitialStateType) => {
            state.user = {};
            state.loading = false;
            state.loggedIn = false;
        },
        setError: (state: UserInitialStateType, action: PayloadAction<any>) => {
            state.error = action.payload.message;
        },
    },
});

const { actions, reducer } = userSlice;

export const { fetchUser, login, setCurrentUser, setError } = actions;

export default reducer;
