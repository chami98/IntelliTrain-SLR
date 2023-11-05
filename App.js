import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppTabNavigator from './navigators/AppTabNavigator';
import Home from './screens/Home';
import AppStackNavigator from './navigators/AppStackNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName={"Home"}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='AppTabNavigator' component={AppTabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name='AppStackNavigator' component={AppStackNavigator} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}