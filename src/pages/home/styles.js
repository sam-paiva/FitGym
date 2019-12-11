import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        justifyContent: 'center',
        textAlign: "center",
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    item: {
        backgroundColor: 'purple',
        height: 100,
        margin: 0
    },
    title: {
        marginTop: 10
    },
    view: {
        flexDirection: 'row'
    },
    titleCard: {
        fontSize: 20,
        color: 'purple'
    },
    textButton: {
        textAlign: 'center',
        alignContent: 'center'
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#9400D3'
    }
});


export default styles;