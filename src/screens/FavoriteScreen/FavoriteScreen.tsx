import React, { FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorite } from '../../redux/pokemon/hooks';
import FavoriteScreenList from './components/FavoriteScreenList';
import { useAuth } from '../../redux/user/hooks';
import AccountScreenLoginForm from '../AccountScreen/components/AccountScreenLoginForm';

const FavoriteScreen: FC = () => {
    const { getLocalStorageData } = useFavorite();
    const { loggedIn } = useAuth();

    useEffect(() => {
        getLocalStorageData();
    }, [getLocalStorageData]);

    return (
        <SafeAreaView>
            {loggedIn ? <FavoriteScreenList /> : <AccountScreenLoginForm />}
        </SafeAreaView>
    );
};

export default FavoriteScreen;
