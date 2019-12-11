import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Input, Item, Button, Text } from 'native-base';
import { Image, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import Icon from 'react-native-vector-icons/AntDesign';
import * as actions from '../../actions/loginActions';
import styles from './styles';
import { isSignedIn, onSignIn } from '../../service/auth';
import { showToast } from '../../layout/toast';
import { ToastAndroid } from 'react-native';

const Login = (props) => {

    const dispatch = useDispatch();

    const loading = useSelector(state => state.login.loading);
    const loginError = useSelector(state => state.login.loginError);

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        isSignedIn().then(function (res) {
            if (res) {
                props.navigation.navigate('Home', {
                    userId: userId
                });
                ToastAndroid.show('Sucesso na autenticação', 3000);
            }
            else {
                if (loginError)
                    ToastAndroid.show('Erro na sua autenticação', 3000);
                return;
            }
        });

    }, [isSignedIn()]);


    function handleLogin() {
        let user = {
            userId: userId,
            password: password
        }

        dispatch(actions.loginAction(user));
    }

    function handleFacebookLogin() {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            function (result) {
                if (result.isCancelled) {
                    ToastAndroid.show('Login cancelado', 100000000);
                } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                        const { AccessToken } = data;
                        console.warn(AccessToken);
                        onSignIn(AccessToken);
                    })
                }
            },
            function (error) {
                ToastAndroid.show('Login cancelado' + error, 4000);
            }
        )
    }

    return (
        <>
            <Container style={styles.container}>
                <Image style={styles.image} source={require('../../resources/gym-icon.png')} />
                <Modal
                    style={styles.modal}
                    backdropOpacity={1}
                    backdropColor={'black'}
                    coverScreen={true}
                    visible={loading}
                >
                    <Item style={styles.modalContent}>
                        <ActivityIndicator size="large" color="#008080" />
                        <Text style={styles.textModal}>Por favor aguarde...</Text>
                    </Item>
                </Modal>
                <Item style={styles.item}>
                    <Icon name="user" size={20} color="white" />
                    <Input style={styles.input} onChangeText={(e) => setUserId(e)} placeholder="Login" />
                </Item>
                <Item style={styles.item}>
                    <Icon name="lock" size={20} color="white" />
                    <Input secureTextEntry={true} onChangeText={(e) => setPassword(e)} style={styles.input} placeholder="Senha"></Input>
                </Item>
                <Item style={styles.groupButtonItem}>
                    <Button onPress={() => props.navigation.navigate('CreateAccount')} style={styles.buttonCriarConta} transparent>
                        <Text style={styles.textGroupButton}>Criar Conta</Text>
                    </Button>
                    <Button onPress={() => props.navigation.navigate('CreateAccount')} style={styles.btnForgotPwd} transparent>
                        <Text style={styles.textGroupButton}>Esqueci a Senha</Text>
                    </Button>
                </Item>
                <Button onPress={() => handleLogin()} style={styles.button} rounded>
                    <Icon name="enter" size={20} color="white" />
                    <Text style={styles.textButton}>Entrar</Text>
                </Button>

                <Button
                    rounded
                    style={styles.btnFacebook}
                    iconLeft
                    onPress={() => handleFacebookLogin()}
                >
                    <Icon name="facebook-square" size={20} color="white" />
                    <Text style={styles.textButton}>Entrar com Facebook</Text>
                </Button>

            </Container>
        </>
    );
}

export default Login;