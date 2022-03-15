import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 230,
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
        left: 1,
        bottom: 20,
        color: '#fff',
        fontSize: 41,
        fontWeight: 'bold',
        top: 10,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        bottom: 5,
        left: 10,
        position: 'absolute',
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 210,
        height: 210,
    },
});

export default styles;
