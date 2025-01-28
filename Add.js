import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 14,
    },
    button: {
        width: '100%',
        backgroundColor: '#FF007F',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

const Add = ({ navigation, route }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    return (
        <View style={styles.background}>
            <StatusBar />
            <View style={styles.container}>
                <Text style={styles.title}>Registration</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    onChangeText={(text) => setPhonenumber(text)}
                    value={phonenumber}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        let mydata = JSON.parse(route.params.datastr);
                        let item = { name: username, email: email, phonenumber: phonenumber };
                        mydata.push(item);

                        fetch("https://32a91c4bb1af4efeb5688aeaf2585ffb.api.mockbin.io/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "32a91c4bb1af4efeb5688aeaf2585ffb",
                            },
                            body: JSON.stringify(mydata),
                        })
                            .then(() => navigation.navigate("Home"))
                    }}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Add;
