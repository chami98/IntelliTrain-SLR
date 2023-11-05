import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const UpdateTime = () => {
    const [trainName, setTrainName] = useState('');
    const [stationName, setStationName] = useState('');
    const [arrivalTime, setArrivalTime] = useState(new Date());
    const [departureTime, setDepartureTime] = useState(new Date());
    const [showArrivalPicker, setShowArrivalPicker] = useState(false);
    const [showDeparturePicker, setShowDeparturePicker] = useState(false);

    const handleSubmit = () => {
        // Handle the submit action here
        console.log("Train Name:", trainName);
        console.log("Station Name:", stationName);
        console.log("Arrival Time:", arrivalTime.toLocaleTimeString());
        console.log("Departure Time:", departureTime.toLocaleTimeString());
    };

    const handleArrivalTimeChange = (event, selectedDate) => {
        setShowArrivalPicker(false);
        if (selectedDate) {
            setArrivalTime(selectedDate);
        }
    };

    const handleDepartureTimeChange = (event, selectedDate) => {
        setShowDeparturePicker(false);
        if (selectedDate) {
            setDepartureTime(selectedDate);
        }
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={trainName}
                onValueChange={(itemValue, itemIndex) => setTrainName(itemValue)}
            >
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
                selectedValue={stationName}
                onValueChange={(itemValue, itemIndex) => setStationName(itemValue)}
            >
                <Picker.Item label="Colombo Fort (කොළඹ කොටුව)" value="Colombo Fort" />
                <Picker.Item label="Kandy (මහනුවර)" value="Kandy" />
                <Picker.Item label="Galle (ගාල්ල)" value="Galle" />
                <Picker.Item label="Anuradhapura (අනුරාධපුර)" value="Anuradhapura" />
                <Picker.Item label="Ella (ඇල්ල)" value="Ella" />
                <Picker.Item label="Jaffna (යාපනකට)" value="Jaffna" />
                <Picker.Item label="Badulla (බදුල්ල)" value="Badulla" />
                <Picker.Item label="Matara (මාතර)" value="Matara" />
                <Picker.Item label="Polgahawela (පොල්ගහවෙල)" value="Polgahawela" />
                <Picker.Item label="Hikkaduwa (හික්කඩුව)" value="Hikkaduwa" />
                <Picker.Item label="Nuwara Eliya (නුවර එළිය)" value="Nuwara Eliya" />
                <Picker.Item label="Kurunegala (කුරුණෑගල)" value="Kurunegala" />
                <Picker.Item label="Bentota (බෙන්ටොට)" value="Bentota" />
                <Picker.Item label="Matale (මාතලේ)" value="Matale" />
                <Picker.Item label="Gampaha (ගම්පහ)" value="Gampaha" />
                <Picker.Item label="Avissawella (අවිසාවෙල්ල)" value="Avissawella" />
                <Picker.Item label="Rambukkana (රඹුක්කන)" value="Rambukkana" />
                <Picker.Item label="Watawala (වටවල)" value="Watawala" />
                <Picker.Item label="Kotagala (කොටගල)" value="Kotagala" />
                <Picker.Item label="Kadugannawa (කදුගන්නාව)" value="Kadugannawa" />
                <Picker.Item label="Kotikawatta (කොටිකාවත්ත)" value="Kotikawatta" />
                <Picker.Item label="Pettah (පෙටා)" value="Pettah" />


            </Picker>

            <Button title="Pick Arrival Time" onPress={() => setShowArrivalPicker(true)} />
            {showArrivalPicker && (
                <DateTimePicker
                    value={arrivalTime}
                    mode="time"
                    is24Hour={true}
                    display="clock"
                    onChange={handleArrivalTimeChange}
                />
            )}

            <Button title="Pick Departure Time" onPress={() => setShowDeparturePicker(true)} />
            {showDeparturePicker && (
                <DateTimePicker
                    value={departureTime}
                    mode="time"
                    is24Hour={true}
                    display="clock"
                    onChange={handleDepartureTimeChange}
                />
            )}

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});

export default UpdateTime;
