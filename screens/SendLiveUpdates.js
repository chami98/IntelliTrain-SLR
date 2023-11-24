import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ToastAndroid, Image, Text, ScrollView, Touchable, TouchableOpacity } from 'react-native'; // Import ToastAndroid
import { Picker } from '@react-native-picker/picker';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const SendLiveUpdates = () => {
    const [trainName, setTrainName] = useState('');
    const [trainStatus, setTrainStatus] = useState('');
    const [trainDetails, setTrainDetails] = useState('');
    const [trainUpdatesData, setTrainUpdatesData] = useState([]);

    const showToast = (message) => {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG, // Toast duration: ToastAndroid.SHORT, ToastAndroid.LONG
            ToastAndroid.BOTTOM, // Toast position: ToastAndroid.TOP, ToastAndroid.CENTER, ToastAndroid.BOTTOM
            25, // X-offset
            50 // Y-offset
        );
    };

    const handleAddTrainUpdate = () => {
        if (trainName && trainStatus && trainDetails) {
            const newTrainUpdate = {
                name: trainName,
                status: trainStatus,
                details: trainDetails,
                statusIcon: { name: 'exclamation-circle', color: 'red' },
                statusColor: 'red',
            };

            setTrainUpdatesData([...trainUpdatesData, newTrainUpdate]);
            setTrainName('');
            setTrainStatus('');
            setTrainDetails('');

            showToast('Train update submitted successfully!');
        } else {
            showToast('Please fill in all fields before submitting.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Send Live Updates</Text>
                <Image
                    style={styles.loader}
                    source={require('../assets/conversation-gif.gif')}
                />
                <Picker
                    style={styles.picker}
                    selectedValue={trainName}
                    onValueChange={(itemValue, itemIndex) => setTrainName(itemValue)}
                >
                    <Picker.Item label="Select Train" value="" />
                    <Picker.Item label="Udarata Menike | උඩරට මැණිකේ" value="Udarata Menike" />
                    <Picker.Item label="Yal Devi | යාල් දේවි" value="Yal Devi" />
                    <Picker.Item label="Galu Kumari | ගාලු කුමාරි" value="Galu Kumari" />
                    <Picker.Item label="Ruhunu Kumari | රුහුණු කුමාරි" value="Ruhunu Kumari" />
                    <Picker.Item label="Podi Menike | පොඩි මැණිකේ" value="Podi Menike" />
                    <Picker.Item label="Senkadagala Menike | සෙන්කඩගල මැණිකේ" value="Senkadagala Menike" />
                    <Picker.Item label="Badulla Night Mail" value="Badulla Night Mail" />
                    <Picker.Item label="Sagarika | සාගරිකා" value="Sagarika" />
                    {/* Add more Picker.Item components as needed */}
                </Picker>
                <TextInput
                    style={styles.input}
                    placeholder="Train Status"
                    value={trainStatus}
                    onChangeText={(text) => setTrainStatus(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Train Details"
                    value={trainDetails}
                    onChangeText={(text) => setTrainDetails(text)}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleAddTrainUpdate}
                        style={styles.submitButton}
                    >
                        <Text style={styles.buttonText}>Submit Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>© {new Date().getFullYear()} Chamikara Mendis</Text>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    // Main container style
    container: {
        flex: 1, // Take up all available space
        padding: 20, // Add padding on all sides
        backgroundColor: '#f5f5f5', // Light gray background
    },
    // Picker style
    picker: {
        marginBottom: 20, // Margin at the bottom
        borderWidth: 1, // Border width
        borderColor: '#ddd', // Gray border color
        borderRadius: 10, // Rounded corners
        backgroundColor: '#fff', // White background
    },
    // Input field style
    input: {
        height: 50, // Fixed height
        borderColor: '#ddd', // Gray border color
        borderWidth: 1, // Border width
        marginBottom: 20, // Margin at the bottom
        paddingLeft: 10, // Padding on the left
        borderRadius: 10, // Rounded corners
        backgroundColor: '#fff', // White background
    },
    // Loader style
    loader: {
        width: 380, // Fixed width
        height: 380, // Fixed height
        alignSelf: 'center', // Center horizontally
    },
    // Title style
    title: {
        fontSize: 25, // Large font size
        fontWeight: 'bold', // Bold text
        marginBottom: 20, // Margin at the bottom
        marginTop: 15, // Margin at the top
        color: '#007BFF', // Blue text color
    },
    // Submit button style
    submitButton: {
        height: 50, // Fixed height
        width: '100%', // Take up all available width
        justifyContent: 'center', // Center children vertically
        alignItems: 'center', // Center children horizontally
        borderRadius: 10, // Rounded corners
        marginBottom: 20, // Margin at the bottom
        backgroundColor: '#3969b7', // Blue background
    },
    // Button text style
    buttonText: {
        color: '#FFF', // White text color
        fontSize: 16, // Medium font size
    },
    // Footer style
    footer: {
        padding: 10, // Add padding on all sides
        justifyContent: 'center', // Center children vertically
        alignItems: 'center', // Center children horizontally
        borderTopWidth: 1, // Border width at the top
        borderTopColor: '#ddd', // Gray border color at the top
    },
    // Footer text style
    footerText: {
        fontSize: 16, // Medium font size
        color: '#777', // Gray text color
    },
});

export default SendLiveUpdates;
