import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';

export default function MapContainer({ route }) {

    const { latitude, longitude, title } = route.params;


    const customMarkerIcon = require('../assets/train_marker.png');

    const coordinates = {
        latitude: latitude,
        longitude: longitude
    };

    const initialRegion = {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const [loading, SetLoading] = useState(true)

    setTimeout(() => {
        SetLoading(false)
    }, 1800);

    return (
        <View style={styles.container}>
            {loading ? <View style={styles.spinner}>
                <Image
                    style={styles.loader}
                    source={require('../assets/load.gif')}
                />
            </View> : (<MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                <Marker coordinate={coordinates} title={title} >
                    <Image source={customMarkerIcon} style={styles.customMarkerIcon} />
                </Marker>
            </MapView>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    // Main container style
    container: {
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center children vertically
        alignItems: 'center', // Center children horizontally
    },
    // Text style
    text: {
        color: '#3969b7', // Blue text color
        fontWeight: 'bold', // Bold text
        fontSize: 25, // Large font size
    },
    // Map style
    map: {
        flex: 1, // Take up all available space
        width: '100%', // Take up all available width
    },
    // Custom marker icon style
    customMarkerIcon: {
        width: 45, // Fixed width
        height: 45, // Fixed height
    },
})
