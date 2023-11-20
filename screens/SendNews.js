import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SendNews = () => {
    const [title, setTitle] = useState('');
    const [news, setNews] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');

    const handleSendNews = () => {
        console.log('Title:', title);
        console.log('News:', news);
        console.log('Date:', date);
        console.log('Photos:', photos);
    };

    return (
        <View style={styles.container}>
            {/* <Icon name="newspaper-o" size={38} color="#3969b7" style={styles.titleIcon} /> */}
            <Text style={styles.title}>Send News</Text>
            <Image source={require('../assets/train-gif.gif')} style={{ width: 280, height: 280, marginBottom: 15 }} />
            <TextInput
                style={styles.input}
                placeholder="Title"
                onChangeText={(text) => setTitle(text)}
                value={title}
            />
            <TextInput
                style={styles.textArea}
                placeholder="News"
                multiline
                numberOfLines={4}
                onChangeText={(text) => setNews(text)}
                value={news}
            />
            <TextInput
                style={styles.input}
                placeholder="Date"
                onChangeText={(text) => setDate(text)}
                value={date}
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSendNews}
            >
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    // Container style
    container: {
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center children vertically
        alignItems: 'center', // Center children horizontally
        backgroundColor: '#f1f1f1', // Light gray background
        padding: 20, // Add padding on all sides
    },
    // Title style
    title: {
        color: '#3969b7', // Blue text color
        fontWeight: 'bold', // Bold text
        fontSize: 30, // Large font size
        marginBottom: 20, // Add margin at the bottom
    },
    // Input field style
    input: {
        width: '100%', // Take up all available width
        height: 40, // Fixed height
        borderColor: '#ccc', // Gray border color
        borderWidth: 1, // Border width
        paddingLeft: 10, // Add padding on the left
        marginBottom: 20, // Add margin at the bottom
        fontSize: 16, // Medium font size
        backgroundColor: '#fff', // White background
        borderRadius: 15, // Rounded corners
    },
    // Text area style
    textArea: {
        width: '100%', // Take up all available width
        height: 120, // Fixed height
        borderColor: '#ccc', // Gray border color
        borderWidth: 1, // Border width
        paddingLeft: 10, // Add padding on the left
        marginBottom: 20, // Add margin at the bottom
        fontSize: 16, // Medium font size
        backgroundColor: '#fff', // White background
        borderRadius: 15, // Rounded corners
    },
    // Send button style
    sendButton: {
        backgroundColor: '#3969b7', // Blue background
        paddingTop: 10, // Add padding at the top
        paddingBottom: 10, // Add padding at the bottom
        paddingRight: 80, // Add padding on the right
        paddingLeft: 80, // Add padding on the left
        borderRadius: 15, // Rounded corners
    },
    // Button text style
    buttonText: {
        color: "white", // White text color
        fontSize: 18 // Large font size
    },
});

export default SendNews;