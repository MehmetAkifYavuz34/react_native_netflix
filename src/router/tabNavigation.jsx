import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import NewHot from '../screens/newHot.jsx';
import Search from '../screens/search/index.jsx';
import Dowlands from '../screens/dowlands/index.jsx';
import {DOWLANDS, HOME, NEWHOT, SEARCH} from '../utils/route.js';
import {ThemeColors} from '../theme/themeColors.js';
import TabBarIcon from '../components/router/tabIcon.jsx';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
        headerTintColor: ThemeColors.WHİTE,
        tabBarStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
        tabBarActiveTintColor: ThemeColors.WHİTE,
        tabBarInactiveTintColor: ThemeColors.WHİTE,
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            focused={focused}
            color={color}
            size={size}
            route={route}
          />
        ),
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={DOWLANDS} component={Dowlands} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
