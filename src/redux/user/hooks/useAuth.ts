/* eslint-disable no-shadow */
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/hooks';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { UserInitialStateType, UserType } from '../../../types';
import { loginAction } from '../actions/loginAction';
import { logout as logoutAction } from '../userSlice';

const useAuth = () => {
    const {
        saveDataAtLocalStorage,
        getLocalStorageData,
        data: dataLocalStorage,
    }: {
        saveDataAtLocalStorage: Function;
        getLocalStorageData: Function;
        data: any;
    } = useLocalStorage({
        key: '@USER_DATA',
    });
    const { user, loggedIn, loading, error }: UserInitialStateType = useSelector(
        ({ user }: { user: UserInitialStateType }) => user,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(user);
        loggedIn && saveDataAtLocalStorage({ data: user });
    }, [loggedIn, saveDataAtLocalStorage, user]);

    useEffect(() => {
        !!dataLocalStorage &&
            dispatch(
                loginAction({
                    username: dataLocalStorage.username,
                    password: dataLocalStorage.password,
                }),
            );
    }, [dataLocalStorage, dispatch, getLocalStorageData]);

    const login = useCallback(
        ({ username, password }) => {
            dispatch(loginAction({ username, password }));
        },
        [dispatch],
    );

    const logout = useCallback(() => {
        dispatch(logoutAction(null));
    }, [dispatch]);

    return { login, logout, loggedIn, user, loading, error, getLocalStorageData, dataLocalStorage };
};

export default useAuth;
