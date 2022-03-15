import React, { FC } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    NativeTouchEvent,
    NativeSyntheticEvent,
} from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import styles from './styles';
import { UserAuthenticationType } from '../../../types';
import Error from '../../../components/Error/Error';
import { colors } from '../../../utils/colors';
import { useAuth } from '../../../redux/user/hooks';

const AccountScreenLoginForm: FC = () => {
    const { login, loading, error } = useAuth();

    const initialValues: UserAuthenticationType = {
        username: '',
        password: '',
    };

    const LoginSchema = yup.object().shape({
        username: yup.string().required('Required'),
        password: yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Formik
                initialValues={initialValues}
                onSubmit={({ username, password }) => login({ username, password })}
                validationSchema={() => LoginSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        <TextInput
                            placeholder="Username"
                            style={styles.input}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                        <Error error={errors.username} />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <Error error={errors.password} />
                        <View style={styles.containerBtn}>
                            <Button
                                title={`Login ${loading ? '...' : ''}`}
                                color={colors.primary}
                                onPress={
                                    handleSubmit as unknown as (
                                        ev: NativeSyntheticEvent<NativeTouchEvent>,
                                    ) => void
                                }
                            />
                        </View>
                    </>
                )}
            </Formik>
            <Error error={error} />
            <Text>test username: yasniel</Text>
            <Text>test password: 123456</Text>
        </View>
    );
};

export default AccountScreenLoginForm;
