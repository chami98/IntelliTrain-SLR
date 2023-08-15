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
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'News' })}>
                        <Ionicons name="notifications-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}> Send Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'LiveUpdates' })}>
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
    container: {
        marginTop: 65,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    textContainer: {
        alignItems: 'center',
    },
    appName: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#3969b7'
    },
    slogan: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 1,
        fontStyle: 'italic',
        color: '#3969b7',
        fontWeight: 'bold'
    },
    greeting: {
        fontSize: 22,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginRight: 20,
        marginLeft: 20,
        width: 150,
        height: 150
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3969b7',
        textAlign: 'center',
    },
});
