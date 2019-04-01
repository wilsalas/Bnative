import React from 'react';
import { Image, StyleSheet, Dimensions, Platform } from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Body, Text
} from 'native-base';
import {
    Grid, Col, Row
} from 'react-native-easy-grid';

import styles from '../sidebar/style';


const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default props => (
    <Container>
        <Grid>
            <Row style={{ backgroundColor: "green" }}>
                <Image source={drawerCover} />
                <Image square style={{
                    position: "absolute",
                    left: Platform.OS === "android" ? deviceWidth / 6 : deviceWidth / 6,
                    top: Platform.OS === "android" ? deviceHeight / 6 : deviceHeight / 6,
                    width: 250,
                    height: 90,
                    resizeMode: "cover"
                }} source={drawerImage} />
            </Row>
            <Row style={{ backgroundColor: "red" }}>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Row>
        </Grid>
    </Container>
);

