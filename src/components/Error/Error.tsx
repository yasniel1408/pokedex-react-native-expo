import { View, Text } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

const Error: FC<{ error?: string }> = ({ error, ...res }: { error?: string }) => {
    if (!error) return null;

    return (
        <Text style={styles.textError} {...res}>
            {error}
        </Text>
    );
};

export default Error;
