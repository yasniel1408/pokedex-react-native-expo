import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const Error = ({ error, ...res }: { error?: string }) => {
    if (!error) return null;

    return (
        <Text style={styles.textError} {...res}>
            {error}
        </Text>
    );
};

export default Error;
