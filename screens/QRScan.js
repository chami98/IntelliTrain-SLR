import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7;
const nodeMCUIP = 'http://192.168.196.186:5000';

const CustomAlert = ({ isVisible, title, message, onClose, icon }) => (
    <Modal isVisible={isVisible}>
        <View style={styles.alertContainer}>
            <Icon name={icon || 'info-circle'} size={50} color={title === 'Insufficient Balance' ? '#ff0000' : (title === 'Invalid QR Code' ? '#ffcc00' : (title === 'Arrival Confirmed' ? '#009688' : '#3969b7'))} />
            <Text style={styles.alertTitle}>{title}</Text>
            <Text style={styles.alertMessage}>{message}</Text>
            <TouchableOpacity onPress={onClose} style={{ ...styles.alertButton, backgroundColor: title === 'Insufficient Balance' ? '#ff0000' : (title === 'Invalid QR Code' ? '#ffcc00' : (title === 'Arrival Confirmed' ? '#009688' : '#3969b7')) }}>
                <Text style={styles.alertButtonText}>Tap to Scan Again</Text>
            </TouchableOpacity>
        </View>
    </Modal>
);

export default function QRScan({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertData, setAlertData] = useState({});

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);

        if (data === "ghduqdph_vwdnhvwf") {
            setAlertData({
                title: 'Departure Successful',
                message: 'Passenger has successfully departed!',
                icon: 'check',
            });

            fetch(`${nodeMCUIP}/on`)
                .then((response) => {
                    // Handle the response as needed
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (data === "ghduqdph_glphwhuv") {
            setAlertData({
                title: 'Insufficient Balance',
                message: 'Passenger has not enough balance to depart.',
                icon: 'exclamation-circle',
            });

            fetch(`${nodeMCUIP}/redLED`)
                .then((response) => {
                    // Handle the response as needed
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (data === "suAlDA9MnKT3Mz2oYh93fCDuwY03") {
            setAlertData({
                title: 'Departure Successful',
                message: 'Passenger has successfully departed!',
                icon: 'check',
            });

            fetch(`${nodeMCUIP}/on`)
                .then((response) => {
                    // Handle the response as needed
                })
                .catch((error) => {
                    // Handle errors
                });
        }
        else if (data === "dyuldylphqjlvdwp") {
            setAlertData({
                title: 'Arrival Confirmed',
                message: 'Passenger have successfully arrived at the destination. Welcome!',
                icon: 'check',
            });

            fetch(`${nodeMCUIP}/on`)
                .then((response) => {
                    // Handle the response as needed
                })
                .catch((error) => {
                    // Handle errors
                });
        }
        else {
            setAlertData({
                title: 'Invalid QR Code',
                message: 'Please scan the correct QR code.',
                icon: 'exclamation-circle',
            });

            fetch(`${nodeMCUIP}/redLED`)
                .then((response) => {
                    // Handle the response as needed
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        setShowAlert(true);
    };

    const closeAlert = () => {
        setShowAlert(false);
        setScanned(false);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
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
            {scanned && (
                <TouchableOpacity onPress={() => setScanned(false)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>intelliTrain</Text>
                </TouchableOpacity>
            )}
            <CustomAlert
                isVisible={showAlert}
                title={alertData.title}
                message={alertData.message}
                onClose={closeAlert}
                icon={alertData.icon}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: qrSize,
        height: qrSize,
    },
    description: {
        fontSize: width * 0.09,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
    },
    cancel: {
        fontSize: width * 0.05,
        textAlign: 'center',
        width: '70%',
        color: 'white',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    // Alert styles
    alertContainer: {
        backgroundColor: '#fff', // White background
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        elevation: 5, // Shadow
        padding: 20,
    },
    alertTitle: {
        fontSize: 24, // Larger font size for the title
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: '#333', // Darker text color
    },
    alertMessage: {
        fontSize: 17, // Slightly larger font size for the message
        textAlign: 'center',
        marginBottom: 15,
        color: '#555', // Darker text color
    },
    alertButton: {
        backgroundColor: '#3969b7',
        padding: 15,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 20,
    },
    alertButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
