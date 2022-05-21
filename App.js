import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
export default function App() {
  return (
<View style={styles.container}>
<Onroad/>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
