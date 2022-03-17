import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {useState} from "react";

function HomeScreen({ navigation }) {
    const [going,setGoing] = useState('');
    const [destination,setDestination] = useState('');
    const [date,setDate] = useState('');

    const register = () =>{
        navigation.navigate('Result',{
            going: going,
            destination: destination,
            date, date,
        })
    }

    return (
        <View style={Style.Box}>
            <Text style={Style.Header}>Hiling.id</Text>
            <Text style={Style.Label}>Lokasi Keberangkatan</Text>
            <View style={Style.InputBox}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Lokasi Keberangkatan"
                    onChangeText={(text)=>setGoing(text)}
                />
            </View>

            <Text style={Style.Label}>Lokasi Tujuan</Text>
            <View style={Style.InputBox}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Lokasi Tujuan"
                    onChangeText={(text)=>setDestination(text)}
                />
            </View>

            <Text style={Style.Label}>Tanggal Keberangakatan</Text>
            <View style={Style.InputBox}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Tanggal Keberangakatan"
                    onChangeText={(text)=>setDate(text)}
                />
            </View>
            
            <View style={Style.Container}>
                <TouchableOpacity style={Style.Button} onPress={register}>
                    <Text style={Style.ButtonText}>Cari</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.Container}>
                <Text style={Style.copyRight}>Copyright by @Megel-119140227</Text>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    Box: {
        backgroundColor: 'skyblue',
        borderRadius: 20,
        padding: 50,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: '95%',
        position: 'absolute',
    },

    Header:{
        fontSize: 36,
        color: '#000',
        fontWeight: '800',
        textAlign: 'center',
        paddingLeft: 10,
        paddingBottom : 20,
        fontWeight: 'bold',
    },

    Label: {
        fontSize: 14,
        color: '#424242',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: 15,
    },

    InputBox: {   
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 5,
        height: 45,
    },

    TextInput: {
        flex: 1,
        paddingLeft: 8,
        
    },

    Container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    copyRight: {
		zIndex: 1,
		textAlign: 'center',
		color: '#000'
	},
    ButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    Button: {
        backgroundColor: 'darkcyan',
        borderRadius: 5,
        padding: 10,
        width: '100%',
    },
});

export default HomeScreen