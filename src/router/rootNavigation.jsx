import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/route';
import SignIn from '../screens/signin';
import WatchList from '../screens/watchList';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen name={WATCHLIST} component={WatchList} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
