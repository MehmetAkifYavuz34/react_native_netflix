import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootNavigation from './src/router/rootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
