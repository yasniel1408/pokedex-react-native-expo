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
import { colors } from '../../../utils/colors';
import styles from './styles';

const AccountScreenUserData: FC = () => {
    const { logout, user } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>First Name: {user.firstName}</Text>
            <Text style={styles.text}>Last Name: {user.lastName}</Text>
            <Text style={styles.text}>Username: {user.username}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>

            <View style={styles.containerBtn}>
                <Button
                    color={colors.red}
                    onPress={
                        logout as unknown as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
                    }
                    title="Logout"
                />
            </View>
        </View>
    );
};
export default AccountScreenUserData;
