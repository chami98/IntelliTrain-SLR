import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const UpdateTime = () => {
    const [trainName, setTrainName] = useState('');
    const [stationName, setStationName] = useState('');
    const [arrivalTime, setArrivalTime] = useState(new Date());
    const [departureTime, setDepartureTime] = useState(new Date());
    const [showArrivalPicker, setShowArrivalPicker] = useState(false);
    const [showDeparturePicker, setShowDeparturePicker] = useState(false);

    const handleArrivalTimeChange = (event, selectedDate) => {
        const currentDate = selectedDate || arrivalTime;
        setShowArrivalPicker(false);
        setArrivalTime(currentDate);
    };

    const handleDepartureTimeChange = (event, selectedDate) => {
        const currentDate = selectedDate || departureTime;
        setShowDeparturePicker(false);
        setDepartureTime(currentDate);
    };

    const handleSubmit = () => {
        ToastAndroid.show('Times updated successfully!', ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Arrival | Departure Times</Text>
            <Image
                style={styles.loader}
                source={require('../assets/stopwatch.gif')}
            />
            <Picker
                style={styles.picker}
                selectedValue={trainName}
                onValueChange={(itemValue, itemIndex) => setTrainName(itemValue)}
            >
                <Picker.Item label="Select Train" value="" />
                <Picker.Item label="Udarata Menike (උඩරට මැණිකේ)" value="Udarata Menike" />
                <Picker.Item label="Yal Devi (යාල් දේවි)" value="Yal Devi" />
                <Picker.Item label="Galu Kumari (ගාලු කුමාරි)" value="Galu Kumari" />
                <Picker.Item label="Ruhunu Kumari (රුහුණු කුමාරි)" value="Ruhunu Kumari" />
                <Picker.Item label="Podi Menike (පොඩි මැණිකේ)" value="Podi Menike" />
                <Picker.Item label="Senkadagala Menike (සෙන්කඩගල මැණිකේ)" value="Senkadagala Menike" />
                <Picker.Item label="Badulla Night Mail" value="Badulla Night Mail" />
                <Picker.Item label="Sagarika (සාගරිකා)" value="Sagarika" />
            </Picker>

            <Picker
                style={styles.picker}
                selectedValue={stationName}
                onValueChange={(itemValue, itemIndex) => setStationName(itemValue)}
            >
                <Picker.Item label="Select Station" value="" />
                <Picker.Item label="Maradana (මරදාන)" value="Kandy" />
                <Picker.Item label="Colombo Fort (කොළඹ කොටුව)" value="Colombo Fort" />
                <Picker.Item label="Kollupitiya (කොල්ලුපිටිය)" value="Galle" />
                <Picker.Item label="Bambalapitiya (බම්බලපිටිය)" value="Anuradhapura" />
                <Picker.Item label="Moratuwa (මොරටුව)" value="Ella" />
                {/* <Picker.Item label="Jaffna (යාපනකට)" value="Jaffna" /> */}
                <Picker.Item label="Panadura (පානදුර)" value="Badulla" />
                <Picker.Item label="Kalutara (කලුතර)" value="Matara" />
                <Picker.Item label="Payagala (පයාගල)" value="Polgahawela" />
                <Picker.Item label="Beruwala (බේරුවල)" value="Hikkaduwa" />
                <Picker.Item label="Aluthgama (අලුත්ගම)" value="Nuwara Eliya" />
                <Picker.Item label="Balapitiya (බලපිටිය)" value="Kurunegala" />
                <Picker.Item label="Ambalangoda (අම්බලන්ගොඩ)" value="Bentota" />
                <Picker.Item label="Hikkaduwa (හික්කඩුව)" value="Matale" />
                <Picker.Item label="Galle (ගාල්ල)" value="Gampaha" />
                {/* <Picker.Item label="Avissawella (අවිසාවෙල්ල)" value="Avissawella" /> */}
                {/* <Picker.Item label="Rambukkana (රඹුක්කන)" value="Rambukkana" />
                <Picker.Item label="Watawala (වටවල)" value="Watawala" />
                <Picker.Item label="Kotagala (කොටගල)" value="Kotagala" />
                <Picker.Item label="Kadugannawa (කදුගන්නාව)" value="Kadugannawa" />
                <Picker.Item label="Kotikawatta (කොටිකාවත්ත)" value="Kotikawatta" />
                <Picker.Item label="Pettah (පෙටා)" value="Pettah" /> */}
                {/* Add other station options here */}
            </Picker>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setShowArrivalPicker(true)}
            >
                <Text style={styles.buttonText}>
                    {showArrivalPicker ? 'Pick Arrival Time' : 'Arrival Time: ' + arrivalTime.toLocaleTimeString()}
                </Text>
            </TouchableOpacity>

            {showArrivalPicker && (
                <DateTimePicker
                    value={arrivalTime}
                    mode="time"
                    is24Hour={true}
                    display="clock"
                    onChange={handleArrivalTimeChange}
                />
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={() => setShowDeparturePicker(true)}
            >
                <Text style={styles.buttonText}>
                    {showDeparturePicker ? 'Pick Departure Time' : 'Departure Time: ' + departureTime.toLocaleTimeString()}
                </Text>
            </TouchableOpacity>

            {showDeparturePicker && (
                <DateTimePicker
                    value={departureTime}
                    mode="time"
                    is24Hour={true}
                    display="clock"
                    onChange={handleDepartureTimeChange}
                />
            )}

            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>© {new Date().getFullYear()} Chamikara Mendis</Text>
            </View>
        </View>
    );
}

// ... (rest of the code remains the same)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    picker: {
        height: 50,
        width: '100%',
        borderColor: '#007BFF',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#FFF',
    },
    button: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#4CAF50', // Changed color to a shade of green
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007BFF',
        marginTop: 10,
    },
    loader: {
        width: 330,
        height: 330,
        alignSelf: 'center',
        marginBottom: 30
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

// ... (rest of the code remains the same)

export default UpdateTime;
