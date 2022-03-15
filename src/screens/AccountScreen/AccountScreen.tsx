import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountScreenUserData from './components/AccountScreenUserData';
import AccountScreenLoginForm from './components/AccountScreenLoginForm';
import { useAuth } from '../../redux/user/hooks';

const AccountScreen: FC = () => {
    const { loggedIn } = useAuth();

    return (
        <SafeAreaView>
            {loggedIn ? <AccountScreenUserData /> : <AccountScreenLoginForm />}
        </SafeAreaView>
    );
};

export default AccountScreen;
