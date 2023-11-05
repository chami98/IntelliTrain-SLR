import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackTrain from '../screens/TrackTrain';
import MapContainer from '../screens/MapContainer';


const AppStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name='TrackTrain' component={TrackTrain} />
                <Stack.Screen options={{ headerShown: false }} name='MapContainer' component={MapContainer} />

            </Stack.Navigator>
        </>
    )
}

export default AppStackNavigator

const styles = StyleSheet.create({})