import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
});

export default styles;
