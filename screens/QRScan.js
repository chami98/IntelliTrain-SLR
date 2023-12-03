import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7;

export default function QRScan({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`${data} `);

        if (data == "ghduqdph_vwdnhvwf") {
            alert(`Departed Successfully`);
            fetch(`http://192.168.196.186:5000/on`)
                .then((response) => {
                    // console.log(response);

                })
                .catch((error) => {
                    console.error(error);
                });
        }

        if (data == "ghduqdph_glphwhuv") {
            alert(`Insufficient Balance to Depart`);
            fetch(`http://192.168.196.186:5000/redLED`)
                .then((response) => {
                    // console.log(response);

                })
                .catch((error) => {
                    console.error(error);
                });
        }

        else if (data == "dyuldylphqjlvdwp") {
            alert(`Arrived Successfully`);
            fetch(`http://192.168.196.186:5000/on`)
                .then((response) => {
                    // console.log(response);
                })
                .catch((error) => {
                    // console.error(error);
                });
        }


    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject, styles.container]}>
                <Text style={styles.description}>Scan your QR code</Text>
                <Image
                    style={styles.qr}
                    source={require('../assets/QRanimation.gif')}
                />
                <Text onPress={() => navigation.navigate('Home')} style={styles.cancel}>
                    Cancel
                </Text>
            </BarCodeScanner>
            {scanned && <TouchableOpacity onPress={() => setScanned(false)} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Tap to Scan Again</Text>
            </TouchableOpacity>}
        </View>
    );
}

const styles = StyleSheet.create({
    // Main container style
    container: {
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center children vertically
        alignItems: 'center', // Center children horizontally
        paddingTop: Constants.statusBarHeight, // Add padding at the top equal to the status bar height
        backgroundColor: '#ecf0f1', // Light gray background
        padding: 8, // Add padding on all sides
    },
    // QR code style
    qr: {
        marginTop: '20%', // Margin at the top
        marginBottom: '20%', // Margin at the bottom
        width: qrSize, // Set width
        height: qrSize, // Set height
    },
    // Description text style
    description: {
        fontSize: width * 0.09, // Set font size
        marginTop: '10%', // Margin at the top
        textAlign: 'center', // Center text
        width: '70%', // Set width
        color: 'white', // White text color
    },
    // Cancel text style
    cancel: {
        fontSize: width * 0.05, // Set font size
        textAlign: 'center', // Center text
        width: '70%', // Set width
        color: 'white', // White text color
    },
    // Button container style
    appButtonContainer: {
        elevation: 8, // Set elevation
        backgroundColor: "#009688", // Set background color
        borderRadius: 10, // Set border radius
        paddingVertical: 10, // Set vertical padding
        paddingHorizontal: 12 // Set horizontal padding
    },
    // Button text style
    appButtonText: {
        fontSize: 18, // Set font size
        color: "#fff", // Set text color
        fontWeight: "bold", // Set font weight
        alignSelf: "center", // Align text to the center
        textTransform: "uppercase" // Transform text to uppercase
    }
});
