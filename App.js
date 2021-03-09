import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer, createSwitchNavigator } from "react-navigation"; 
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const TabNavigator = createBottomTabNavigator({
  ExchangeScreen : { screen : ExchangeScreen },
  HomeScreen : { screen : HomeScreen },
});

const AppContainer = createAppContainer(TabNavigator);
