import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Test from './Screen/testScreen/testScreen';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screen/welcomeScreen/welcomeScreen'
import Connexion  from './Screen/connexionScreen/connexionScreen';
import Login from "./Screen/loginScreen/loginScreen"
import Register from "./Screen/registerScreen/registerScreen"
import Menu from './Screen/menuScreen/menuScreen'
import Profile from './Screen/profileScreen/profileScreen'
import MapView from "react-native-maps";
import Home from "./Screen/homeScreen/homeScreen"
import Wating  from './Screen/watingScreen/watingScreen';
import Oncall from './Screen/oncallScreen/oncallScreen';
import Onroad from './Screen/onroadScreen/onroadScreen';
import Paying from './Screen/payingScreen/payingScreen'
import UserProfile from './Screen/userProfileScreen/userProfileScreen';
import 'react-native-gesture-handler';

const switchNavigator = createSwitchNavigator({
  Welcome : Welcome , 
  Connexion : Connexion ,
  Register : Register , 
  Menu : Menu , 
 Profile : Profile , 
 Wating : Wating , 
 Oncall : Oncall , 
 Home : Home , 

 Onroad : Onroad , 
 UserProfile : UserProfile , 
  Login: Login,
  Paying : Paying , 

  mainFlow: createStackNavigator(
    {
 Test:Test
    },
  ),
},
  {
    initialRouteName: 'Welcome',
  });
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <App />
  );
};