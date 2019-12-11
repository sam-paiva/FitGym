import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Left, Item, Button, Text, Card, Content, CardItem, Title, Header, View, Body } from 'native-base';
import { Image, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { isSignedIn, onSignIn, onSignOut } from '../../service/auth';
import { showToast } from '../../layout/toast';
import { ToastAndroid } from 'react-native';

import * as actions from '../../actions/profileActions';

const Home = (props) => {

    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.profile);
    const User = useSelector(state => state.login.user);
    const { navigation } = props;

    useEffect(() => {
        console.warn(profile);
        if (Object.entries(profile).length === 0 && profile.constructor === Object)
            dispatch(actions.getProfile(User));
    });

    function logout() {
        onSignOut();

        props.navigation.navigate('Login');
    }

    return (
        <>
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button onPress={() => logout()} transparent>
                            <Icon size={25} color={'white'} name='keyboard-backspace' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.text}>Resumo</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.card}>
                        <Card >
                            <CardItem header>
                                <Text style={styles.titleCard}>Peso</Text>
                            </CardItem>
                            <CardItem >
                                <Text>Peso Inicial: {profile.weight}</Text>
                            </CardItem>
                            <CardItem >
                                <Text>Meta:</Text>
                            </CardItem>
                            <Button style={styles.button}>
                                <Icon name="weight" size={15} color={'white'} />
                                <Text style={styles.textButton}>Atualizar</Text>
                            </Button>
                        </Card>
                    </View>
                </Content>
            </Container>
        </>
    );
}

export default Home;