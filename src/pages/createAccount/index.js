import React from 'react';
import { Container, Input, Item, Button, Text } from 'native-base';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const CreateAccount = () => {
    return (
        <>
            <Container style={styles.container}>
                <Image style={styles.image} source={require('../../resources/gym-icon.png')} />
                <Item style={styles.item}>
                    <Input style={styles.input} placeholder="nome completo" />
                </Item>
                <Item style={styles.item}>
                    <Input style={styles.input} placeholder="email" />
                </Item>
                <Item style={styles.item}>
                    <Input style={styles.input} placeholder="idade"></Input>
                </Item>
                <Item style={styles.item}>
                    <Input secureTextEntry={true} style={styles.input} placeholder="senha"></Input>
                </Item>
                <Item style={styles.item}>
                    <Input secureTextEntry={true} style={styles.input} placeholder="confirmar senha"></Input>
                </Item>
                <Button style={styles.button} rounded>
                    <Text style={styles.textButton}>Criar</Text>
                </Button>
            </Container>
        </>
    );
}

export default CreateAccount;