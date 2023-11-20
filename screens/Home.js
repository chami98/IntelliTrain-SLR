import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ route, navigation }) => {

    // const { data } = route.params;
    return (

        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.appName}>IntelliTrain</Text>
                <Text style={styles.slogan}>Taking your railway experience to the next level</Text>
                {/* <Text style={styles.greeting}>Welcome, {data.firstName}!</Text> */}
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'TrackTrain' })}>
                        <Ionicons name="train-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Track Train</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'UpdateTime' })}>
                        <Ionicons name="time-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}> Update Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'SendLiveUpdates' })}>
                        <Ionicons name="pulse-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Send Live Updates</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'SendNews' })}>
                        <Ionicons name="chatbubbles-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Send News</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Home;


const styles = StyleSheet.create({
    // Main container style
    container: {
        marginTop: 65, // Margin at the top
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center children vertically
        alignItems: 'center', // Center children horizontally
        backgroundColor: '#f2f2f2', // Light gray background
    },
    // Container for text elements
    textContainer: {
        alignItems: 'center', // Center children horizontally
    },
    // App name style
    appName: {
        fontSize: 38, // Large font size
        fontWeight: 'bold', // Bold text
        color: '#3969b7' // Blue text color
    },
    // Slogan style
    slogan: {
        fontSize: 12, // Small font size
        textAlign: 'center', // Center text
        marginBottom: 1, // Margin at the bottom
        fontStyle: 'italic', // Italic text
        color: '#3969b7', // Blue text color
        fontWeight: 'bold' // Bold text
    },
    // Greeting style
    greeting: {
        fontSize: 22, // Large font size
        color: '#2ecc71', // Green text color
        fontWeight: 'bold', // Bold text
    },
    // Container for buttons
    buttonContainer: {
        flex: 1, // Take up all available space
        alignItems: 'center', // Center children horizontally
        justifyContent: 'center', // Center children vertically
    },
    // Row style
    row: {
        flexDirection: 'row', // Arrange children in a row
        justifyContent: 'space-around', // Distribute children evenly with space around them
        marginVertical: 20, // Vertical margin
    },
    // Button style
    button: {
        alignItems: 'center', // Center children horizontally
        backgroundColor: '#fff', // White background
        borderRadius: 10, // Rounded corners
        padding: 20, // Padding on all sides
        shadowColor: '#000', // Black shadow
        shadowOffset: {
            width: 0, // Shadow width
            height: 1, // Shadow height
        },
        shadowOpacity: 0.22, // Shadow opacity
        shadowRadius: 2.22, // Shadow radius
        elevation: 3, // Elevation (for Android)
        marginRight: 20, // Right margin
        marginLeft: 20, // Left margin
        width: 150, // Fixed width
        height: 150 // Fixed height
    },
    // Button text style
    buttonText: {
        marginTop: 10, // Margin at the top
        fontSize: 16, // Medium font size
        fontWeight: 'bold', // Bold text
        color: '#3969b7', // Blue text color
        textAlign: 'center', // Center text
    },
});
