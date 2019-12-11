import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Input, Item, Button, Text } from 'native-base';
import { Image, ToastAndroid } from 'react-native';

import * as actions from '../../actions/loginActions';
import styles from './styles';

const CreateAccount = (props) => {

    const [name, setName] = useState('');
    const [lasName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const successCreateAccount = useSelector(state => state.login.successCreateAccount);

    const dispatch = useDispatch();

    useEffect(() => {

    })

    function saveAccount() {

        if (email.length === 0 || name.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            ToastAndroid.show('Por favor preencha todos os campos', 5000);
            return;
        }

        let User = {
            userId: email,
            password: password,
            firstName: name,
            lastName: lasName,
            email: email
        }

        dispatch(actions.createAccountAction(User));
    }

    if (successCreateAccount) {
        props.navigation.navigate('Login');
        ToastAndroid.show('Sucesso ao criar sua conta', 4000);
    }

    return (
        <>
            <Container style={styles.container}>
                <Text>Registre-se</Text>
                <Item style={styles.item}>
                    <Input onChangeText={((e) => setName(e))} style={styles.input} placeholder="Nome" />
                </Item>
                <Item style={styles.item}>
                    <Input onChangeText={((e) => setLastName(e))} style={styles.input} placeholder="Sobrenome" />
                </Item>
                <Item style={styles.item}>
                    <Input onChangeText={((e) => setEmail(e))} style={styles.input} placeholder="E-mail" />
                </Item>
                <Item style={styles.item}>
                    <Input onChangeText={((e) => setPassword(e))} secureTextEntry={true} style={styles.input} placeholder="Senha"></Input>
                </Item>
                <Item style={styles.item}>
                    <Input onChangeText={((e) => setConfirmPassword(e))} secureTextEntry={true} style={styles.input} placeholder="Confirmar Senha"></Input>
                </Item>
                <Button onPress={() => saveAccount()} style={styles.button} rounded>
                    <Text style={styles.textButton}>Criar</Text>
                </Button>
            </Container>
        </>
    );
}

export default CreateAccount;