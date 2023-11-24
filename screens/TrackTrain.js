import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const TrackTrain = ({ route, navigation }) => {


    return (
        <View style={styles.container}>
            <Icon name="ticket" size={38} color="#2ecc71" style={styles.titleIcon} />
            <Text style={styles.text}>Select Train</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 9.6652,
                    longitude: 80.0208,
                    title: "Yaal Dewi / යාල් දේවි"
                }
            })}>
                <Icon name="train" size={24} color="#3969b7" style={styles.icon} />
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Yaal Dewi / යාල් දේවි</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 6.9800,
                    longitude: 81.0597,
                    title: "Udarata Menike / උඩරට මැණිකේ"
                }
            })}>
                <Icon name="train" size={24} color="#3969b7" style={styles.icon} />
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Udarata Menike / උඩරට මැණිකේ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 7.2896,
                    longitude: 80.6324,
                    title: "Podi Menike / පොඩි මැණිකේ"
                }
            })}>
                <Icon name="train" size={24} color="#3969b7" style={styles.icon} />
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Podi Menike / පොඩි මැණිකේ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 9.8147,
                    longitude: 80.0482,
                    title: "Uttara Devi / උත්තරා දේවි"
                }
            })}>
                <Icon name="train" size={24} color="#3969b7" style={styles.icon} />
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Uttara Devi / උත්තරා දේවි</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 6.0333,
                    longitude: 80.2144,
                    title: "Galu Kumari / ගාලු කුමාරි"
                }
            })}>
                <Icon name="train" size={24} color="#3969b7" style={styles.icon} />
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Galu Kumari / ගාලු කුමාරි</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 8.3444,
                    longitude: 80.4108,
                    title: "Rajarata Rajini / රජරට රැජිණි"
                }
            })}>
                <Icon name="train" size={24} color="#3969b7" style={styles.icon} />
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Rajarata Rajini / රජරට රැජිණි</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 6.14204,
                    longitude: 80.10008,
                    title: "Sagarika / සාගරිකා"
                }
            })}>
                <Icon name="train" size={24} color="#3969b7" style={styles.icon} />
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Sagarika / සාගරිකා</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>© {new Date().getFullYear()} Chamikara Mendis</Text>
            </View>
        </View>
    )
}

export default TrackTrain
const styles = StyleSheet.create({
    // Main container style
    container: {
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center children vertically
        alignItems: 'center', // Center children horizontally
        backgroundColor: '#f2f2f2', // Light gray background
    },
    // Button style
    button: {
        flexDirection: 'row', // Arrange children in a row
        alignItems: 'center', // Center children vertically
        justifyContent: 'center', // Center children horizontally
        backgroundColor: '#fff', // White background
        borderRadius: 10, // Rounded corners
        padding: 20, // Add padding on all sides
        shadowColor: '#000', // Black shadow
        shadowOffset: {
            width: 0, // Shadow width
            height: 2, // Shadow height
        },
        shadowOpacity: 0.2, // Shadow opacity
        shadowRadius: 3.84, // Shadow radius
        elevation: 5, // Elevation (for Android)
        width: '80%', // Take up 80% of the available width
        marginVertical: 10, // Vertical margin
        borderWidth: 1, // Border width
        borderColor: '#ddd', // Gray border color
    },
    // Button text style
    buttonText: {
        fontSize: 16, // Medium font size
        fontWeight: 'bold', // Bold text
        color: '#3969b7', // Blue text color
        textAlign: 'center', // Center text
    },
    // Text style
    text: {
        fontSize: 24, // Large font size
        color: '#2ecc71', // Green text color
        fontWeight: 'bold', // Bold text
        marginBottom: 20, // Margin at the bottom
    },
    // Icon style
    icon: {
        marginRight: 1, // Right margin
    },
    // Button content style
    buttonContent: {
        flex: 1, // Take up all available space
        alignItems: 'center', // Center children horizontally
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