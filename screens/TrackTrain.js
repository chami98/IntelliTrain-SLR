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
        </View>
    )
}

export default TrackTrain
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3969b7',
        textAlign: 'center',
    },
    text: {
        fontSize: 24,
        color: '#2ecc71',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    icon: {
        marginRight: 1,
    },
    buttonContent: {
        flex: 1, // Allow text to expand vertically
        alignItems: 'center', // Center text vertically
    },
});