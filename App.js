import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ReadScreen from './screens/readscreen';
import WriteScreen from './screens/writescreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  'Read a Story': {screen: ReadScreen},
  'Write a Story': {screen: WriteScreen},
});

const AppContainer = createAppContainer(TabNavigator);