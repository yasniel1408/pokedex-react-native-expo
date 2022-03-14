import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { UserAuthenticationType } from '../../../types';
import Error from '../../../components/Error/Error';

const initialValues: UserAuthenticationType = {
    username: '',
    password: '',
};

const AccountScreenLoginForm = () => {
    const { handleSubmit, values, setFieldValue, errors } = useFormik<UserAuthenticationType>({
        initialValues,
        onSubmit: ({ username, password }: UserAuthenticationType): void => {
            console.log('EVIADO...', username, password);
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required'),
        }),
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesión</Text>
            <View style={styles.fild}>
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                    autoCapitalize="none"
                    value={values.username}
                    onChangeText={(text) => setFieldValue('username', text)}
                />
                <Error error={errors.username} />
            </View>
            <View style={styles.fild}>
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    autoCapitalize="none"
                    secureTextEntry
                    value={values.password}
                    onChangeText={(text) => setFieldValue('password', text)}
                />
                <Error error={errors.password} />
            </View>
            <Button title="Login" onPress={() => handleSubmit()} />
        </View>
    );
};

export default AccountScreenLoginForm;
