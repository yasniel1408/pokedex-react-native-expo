import { useCallback } from 'react';
/* eslint-disable no-shadow */
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/hooks';
import { UserInitialStateType } from '../../../types';
import { loginAction } from '../actions/loginAction';
import { logout as logoutAction } from '../userSlice';

const useAuth = () => {
    const { user, loggedIn, loading, error }: UserInitialStateType = useSelector(
        ({ user }: { user: UserInitialStateType }) => user,
    );
    const dispatch = useAppDispatch();

    const login = useCallback(
        ({ username, password }) => {
            dispatch(loginAction({ username, password }));
        },
        [dispatch],
    );

    const logout = useCallback(() => {
        dispatch(logoutAction(null));
    }, [dispatch]);

    return { login, logout, loggedIn, user, loading, error };
};

export default useAuth;
