import React from 'react';
import { Root } from 'native-base';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Login from './screens/login/login';
import Home from './screens/home/home';
import SideBar from "./screens/sidebar/sidebar";
import Anatomy from './screens/test';

/* Definir los screens que serán visibles al presionar clic sobre los botones
del sidebar */
const Drawer = createDrawerNavigator(
    {
        Home: {
            screen: Home
        },
        Anatomy: { screen: Anatomy },
    }, {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar  {...props} />
    }
);

/* Definir los screens generales del app */
const AppNavigator = createStackNavigator(
    {
        Drawer: { screen: Drawer },
        Login: { screen: Login }
    }, {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

/* configurar el stack de navegación */
const AppContainer = createAppContainer(AppNavigator);

export default () => (
    <Root>
        <AppContainer />
    </Root>
);