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
        marginTop: 30,
        borderColor: 'white'
    },
    groupButtonItem: {
        marginTop: 20,
        borderBottomColor: 'black'
    },
    buttonCriarConta: {
        justifyContent: 'flex-start',
        marginTop: 20,
        alignContent: 'flex-start'
    },
    btnForgotPwd: {
        justifyContent: 'flex-end',
        marginLeft: 180,
        marginTop: 20,
    },
    button: {
        margin: 40,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    textButton: {
        textAlign: 'center',
        color: "white"
    },
    btnFacebook: {
        justifyContent: 'center',
        marginTop: 0,
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: '#3b5998'
    },
    modalContent: {
        height: 70,
        width: 250,
        justifyContent: 'center',
        backgroundColor: '#1d1d1d',
        borderBottomColor: 'black'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textModal: {
        textAlign: 'center',
        color: "white",
        marginLeft: 10
    },
    textGroupButton: {
        fontSize: 11,
        color: 'white',
    },
});


export default styles;