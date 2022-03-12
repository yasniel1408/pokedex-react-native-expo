import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from './styles';

const Loading = ({ loading, ...res }: { loading: Boolean }) => {
    if (!loading) return null;

    return (
        <View style={styles.container}>
            <ActivityIndicator {...res} />
        </View>
    );
};

export default Loading;
