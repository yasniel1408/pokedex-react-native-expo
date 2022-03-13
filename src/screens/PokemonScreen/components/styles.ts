import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }],
    },
    content: {
        marginHorizontal: 20,
        marginTop: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 3,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 27,
    },
    order: {
        color: '#fff',
        fontWeight: 'bold',
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
    },
    image: {
        marginTop: 240,
        width: 260,
        height: 300,
        resizeMode: 'contain',
    },
});

export default styles;
