import { Formik } from 'formik';
import React, { FC } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    NativeTouchEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { useAuth } from '../../../redux/user/hooks';
import styles from './styles';

const AccountScreenUserData: FC = () => {
    const { logout, user } = useAuth();

    return (
        <View style={styles.containerBtn}>
            <Text>First Name: {user.firstName}</Text>
            <Text>Last Name: {user.lastName}</Text>
            <Text>Username: {user.username}</Text>
            <Text>Email: {user.email}</Text>

            <Button
                onPress={logout as unknown as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void}
                title="Logout"
            />
        </View>
    );
};
export default AccountScreenUserData;
