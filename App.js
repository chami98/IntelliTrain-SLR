import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Home from './screens/Home';
import QRScan from './screens/QRScan';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'QRScan') {
            iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'megaphone-outline' : 'megaphone-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        headerShown: false
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}

      >
        <Tab.Screen name="Home" component={Home}
        />
        <Tab.Screen name="QRScan" component={QRScan}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

