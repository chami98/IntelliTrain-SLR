import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Home from '../screens/Home';
import QRScan from '../screens/QRScan';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AppTabNavigator() {

    // Create a bottom tab navigator
    const Tab = createBottomTabNavigator();

    return (
        // Define the tab navigator
        <Tab.Navigator
            // Set the screen options
            screenOptions={({ route }) => ({
                // Define the tab bar icon
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    // Set the icon based on the route name
                    if (route.name === 'Home') {
                        iconName = focused ? 'home-outline' : 'home-outline';
                    } else if (route.name === 'QRScan') {
                        iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
                    } else if (route.name === 'QRScan2') {
                        iconName = focused ? 'megaphone-outline' : 'megaphone-outline';
                    }
                    // Return the icon component
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                // Hide the header
                headerShown: false
            })}
            // Set the tab bar options
            tabBarOptions={{
                "tabBarActiveTintColor": "tomato",
                "tabBarInactiveTintColor": "gray",
                "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                ]
            }}
        >
            // Define the Home screen
            <Tab.Screen name="Home" component={Home}
            />
            // Define the QRScan screen with initial params
            <Tab.Screen
                name="QRScan"
                component={QRScan}
                initialParams={{ scanned: 'false' }}
            />

        </Tab.Navigator>

    );
}