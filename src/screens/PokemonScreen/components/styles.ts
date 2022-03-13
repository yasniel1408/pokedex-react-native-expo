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
        marginTop: 70,
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
        top: -100,
        height: 230,
    },
    image: {
        marginTop: 240,
        width: 260,
        height: 300,
        resizeMode: 'contain',
    },
    contentType: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
        margin: 2,
    },
    contentStats: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle: {
        width: '30%',
    },
    statName: {
        fontSize: 12,
        color: '#6b6b6b',
    },
    blockInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        width: '12%',
        fontSize: 12,
    },
    bgBar: {
        backgroundColor: '#dedede',
        width: '88%',
        height: 5,
        borderRadius: 20,
        overflow: 'hidden',
    },
    bar: {
        // backgroundColor: "red",
        // width: "40%",
        height: 5,
        borderRadius: 20,
    },
});

export default styles;
