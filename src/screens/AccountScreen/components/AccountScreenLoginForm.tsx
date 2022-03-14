import React, { FC } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    NativeTouchEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './styles';
import { UserAuthenticationType } from '../../../types';
import Error from '../../../components/Error/Error';

const AccountScreenLoginForm: FC = () => {
    const initialValues: UserAuthenticationType = {
        username: 'as',
        password: 'as',
    };

    const LoginSchema = yup.object().shape({
        username: yup.string().required('Required'),
        password: yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
    });
    const { handleSubmit, handleChange, handleBlur, values, setFieldValue, errors } = useFormik({
        initialValues,
        onSubmit: (data: any) => alert(`Username:, Password:`),
        validationSchema: () => LoginSchema,
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesión</Text>
            <View style={styles.fild}>
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                />
                <Error error={errors.username} />
            </View>
            <View style={styles.fild}>
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    autoCapitalize="none"
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                />
                <Error error={errors.password} />
            </View>
            <Button
                title="Login"
                onPress={
                    handleSubmit as unknown as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
                }
            />
        </View>
    );
};

export default AccountScreenLoginForm;
