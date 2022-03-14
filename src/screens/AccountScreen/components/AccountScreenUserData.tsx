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
import * as yup from 'yup';
import { UserAuthenticationType } from '../../../types';

const AccountScreenUserData: FC = () => {
    const initialValues: UserAuthenticationType = {
        username: 'as',
        password: 'as',
    };

    const LoginSchema = yup.object().shape({
        username: yup.string().required('Required'),
        password: yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
    });

    return (
        <View>
            <Text>Login Screen</Text>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={() => LoginSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <TextInput
                            // name="username"
                            placeholder="username Address"
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                        <TextInput
                            // name="password"
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        <Button
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>,
                                ) => void
                            }
                            title="Submit"
                        />
                    </>
                )}
            </Formik>
        </View>
    );
};
export default AccountScreenUserData;
