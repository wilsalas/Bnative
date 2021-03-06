import React from 'react';
import {
    ImageBackground,
    View,
    StatusBar
} from 'react-native';
import {
    Button,
    Container,
    H3,
    Text
} from 'native-base';
import styles from './style';

const launchscreenBg = require('../../../assets/launchscreen-bg.png');
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

export default props => (

    <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
            <View style={styles.logoContainer}>
                <ImageBackground source={launchscreenLogo} style={styles.logo} />
            </View>
            <View
                style={{
                    alignItems: "center",
                    marginBottom: 50,
                    backgroundColor: "transparent"
                }}
            >
                <H3 style={styles.text}>App to showcase</H3>
                <View style={{ marginTop: 8 }} />
                <H3 style={styles.text}>NativeBase components</H3>
                <View style={{ marginTop: 8 }} />
            </View>
            <View style={{ marginBottom: 80 }}>
                <Button
                    style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                    onPress={() => props.navigation.openDrawer()}
                >
                    <Text>Lets Go!</Text>
                </Button>
            </View>
        </ImageBackground>
    </Container>
);