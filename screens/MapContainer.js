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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 25
    },
    map: {
        flex: 1,
        width: '100%',
    }, customMarkerIcon: {
        width: 45,
        height: 45,
    },

})
