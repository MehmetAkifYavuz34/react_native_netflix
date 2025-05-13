import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {
  ADDNEWLIST,
  GETSTARTED,
  MOVIEDETAIL,
  SIGNIN,
  TAB,
  WATCHLIST,
} from '../utils/route';
import SignIn from '../screens/signin';
import WatchList from '../screens/watchList';
import Header from '../components/router/header';
import {ThemeColors} from '../theme/themeColors';
import {Edit2} from 'iconsax-react-nativejs';
import addNewList from '../screens/watchList/addNewList';
import TabNavigator from './tabNavigation';
import movieDetail from '../screens/movies/movieDetail';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: ThemeColors.WHİTE,
        header: () => <Header />,

        headerTitleAlign: 'center',
      })}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen name={WATCHLIST} component={WatchList} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ADDNEWLIST}
        component={addNewList}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MOVIEDETAIL}
        component={movieDetail}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
