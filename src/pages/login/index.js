import React from 'react';
import { Container, Input, Item, Button, Text } from 'native-base';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Login = (props) => {
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
                    <Text style={styles.textButton}>Entrar</Text>
                </Button>
                <Button onPress={() => props.navigation.navigate('CreateAccount')} style={styles.buttonCriarConta} transparent>
                    <Text>Criar Conta</Text>
                </Button>
            </Container>
        </>
    );
}

export default Login;