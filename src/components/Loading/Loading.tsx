import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from './styles';
import { colors } from '../../utils/colors';

const Loading = ({ loading, ...res }: { loading: Boolean }) => {
    if (!loading) return null;

    return (
        <View style={styles.container} {...res}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    );
};

export default Loading;
