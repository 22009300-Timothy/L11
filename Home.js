import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: '#FF007F',
        paddingVertical: 10,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    listContainer: {
        width: '100%',
    },
    listItem: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 3,
    },
    listItemText: {
        fontSize: 14,
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://32a91c4bb1af4efeb5688aeaf2585ffb.api.mockbin.io/")
            .then((response) => response.json())
            .then((myJson) => setMyData(myJson))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>Username: {item.username}</Text>
            <Text style={styles.listItemText}>Email: {item.email}</Text>
            <Text style={styles.listItemText}>Phone Number: {item.phonenumber}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Participants List</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Add", { datastr: JSON.stringify(myData) })}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <FlatList
                style={styles.listContainer}
                data={myData}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Home;
