import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        color: 'white'
    },
    image: {
        width: 150,
        height: 100,
        alignSelf: 'center'
    },
    item: {
        marginTop: 30
    },
    buttonCriarConta: {
        justifyContent: 'center',
        marginTop: 20
    },
    button: {
        margin: 40,
        justifyContent: 'center',
        backgroundColor: '#970B97'
    },
    textButton: {
        textAlign: 'center',
        color: "white"
    },
    btnFacebook: {
        justifyContent: 'center',
        marginTop: 0,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#3b5998'
    }
});


export default styles;