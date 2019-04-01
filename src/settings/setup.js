import React, { Component } from 'react';
import * as Expo from 'expo';
import App from '../App';

export default class Setup extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        }
    }
    /* Loading fonts app */
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
            Entypo: require("native-base/Fonts/Entypo.ttf"),
            Feather: require("native-base/Fonts/Feather.ttf"),
            FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
            // MaterialIcons: require("native-base/Fonts/MaterialIcons.ttf"),
            // MaterialCommunityIcons: require("native-base/Fonts/MaterialCommunityIcons.ttf"),
            Octicons: require("native-base/Fonts/Octicons.ttf"),
            // Zocial: require("@expo/vector-icons/fonts/Zocial.šttf"),
            // SimpleLineIcons: require("native-base/Fonts/SimpleLineIcons.ttf"),
            // EvilIcons: require("native-base/Fonts/EvilIcons.ttf"),
            // ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        return !this.state.isReady ?
            <Expo.AppLoading /> :
            <App />
    }
}