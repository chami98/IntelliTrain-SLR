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
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    picker: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },

    loader: {
        width: 380,
        height: 380,
        alignSelf: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 15,
        color: '#007BFF',
    },
    submitButton: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#3969b7', // Changed color to a shade of orange
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerText: {
        fontSize: 16,
        color: '#777',
    },
});

export default SendLiveUpdates;
