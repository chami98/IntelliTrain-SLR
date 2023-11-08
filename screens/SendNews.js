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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        padding: 20,
    },
    title: {
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    textArea: {
        width: '100%',
        height: 120,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    sendButton: {
        backgroundColor: '#3969b7',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 80,
        paddingLeft: 80,
        borderRadius: 15,
    },
    buttonText: {
        color: "white",
        fontSize: 18
    },
});

export default SendNews;