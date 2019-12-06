import React from 'react';
import { Container, Input, Item, Button, Text } from 'native-base';
import { Image } from 'react-native';
import { LoginManager } from 'react-native-fbsdk'

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Login = (props) => {

    function handleFacebookLogin() {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled')
                } else {
                    console.log('Login success with permissions: ' + result.grantedPermissions.toString())
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error)
            }
        )
    }

    return (
        <>
            <Container style={styles.container}>
                <Image style={styles.image} source={require('../../resources/gym-icon.png')} />
                <Item style={styles.item}>
                    <Icon name="user" size={20} color="white" />
                    <Input style={styles.input} placeholder="Login" />
                </Item>
                <Item style={styles.item}>
                    <Icon name="lock" size={20} color="white" />
                    <Input secureTextEntry={true} style={styles.input} placeholder="Senha"></Input>
                </Item>
                <Button style={styles.button} rounded>
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
                <Button onPress={() => props.navigation.navigate('CreateAccount')} style={styles.buttonCriarConta} transparent>
                    <Text style={styles.textButton}>Criar Conta</Text>
                </Button>

            </Container>
        </>
    );
}

export default Login;