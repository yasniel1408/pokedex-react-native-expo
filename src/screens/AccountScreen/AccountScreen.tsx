import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { UserInitialStateType } from '../../types';
import AccountScreenUserData from './components/AccountScreenUserData';
import AccountScreenLoginForm from './components/AccountScreenLoginForm';

const AccountScreen: FC = () => {
    const { loggedIn }: UserInitialStateType = useSelector(
        ({ user }: { user: UserInitialStateType }) => user,
    );
    return (
        <SafeAreaView>
            {loggedIn ? <AccountScreenUserData /> : <AccountScreenLoginForm />}
        </SafeAreaView>
    );
};

export default AccountScreen;
