import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

var location = ['Lampung', 'Lampung', 'Lampung', 'Lampung'];
var locDestination = ['Surabaya', 'Yogyakarta', 'Bali', 'Bandung'];
var dates = ['26 April 2022', '1 Mei 2022', '11 Mei 2022', '20 Desember 2022'];
var airline = ['Batik Air', 'Garuda Indonesia', 'Lion Air', 'Nusantara Air'];

export default function Cari() {
    const route = useRoute();

    if ((route.params.going == location[0]) && (route.params.destination == locDestination[0]) && (route.params.date == dates[0])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.airline}>  {airline[0]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.date}>  {dates[0]}</Text>
                </Text>
                <Text style={Style.lokasi}>{route.params.going}     --->     {locDestination[0]}</Text>
            </View>
        )
    }

    else if ((route.params.going == location[1]) && (route.params.destination == locDestination[1]) && (route.params.date == dates[1])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.airline}>  {airline[1]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.date}>  {dates[1]}</Text>
                </Text>
                <Text style={Style.lokasi}>{route.params.going}                --->             {locDestination[1]}</Text>

            </View>
        )
    }

    else if ((route.params.going == location[2]) && (route.params.destination == locDestination[2]) && (route.params.date == dates[2])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.airline}>  {airline[2]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.date}>  {dates[2]}</Text>
                </Text>
                <Text style={Style.lokasi}>{route.params.going}                --->             {locDestination[2]}</Text>
            </View>
        )
    }

    else if ((route.params.going == location[3]) && (route.params.destination == locDestination[3]) && (route.params.date == dates[3])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.airline}>  {airline[3]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.date}>  {dates[3]}</Text>
                </Text>
                <Text style={Style.lokasi}>{route.params.going}                --->             {locDestination[3]}</Text>
            </View>
        )
    }

    else {
        return (
            <View style={Style.noOption}>
                <View style={Style.box}>
                    <Text style={Style.info}>Berikut penerbangan yang tersedia</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.airline}>  {airline[0]} </Text>
                    </Text>
                    <Text>Jadwal       :
                        <Text style={Style.date}>  {dates[0]}</Text>
                    </Text>
                    <Text style={Style.lokasi}>{location[0]}                --->             {locDestination[0]}</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.airline}>  {airline[1]}</Text>
                    </Text>
                    <Text>Jadwal       :
                        <Text style={Style.date}>  {dates[1]}</Text>
                    </Text>
                    <Text style={Style.lokasi}>{location[1]}                --->             {locDestination[1]}</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.airline}>  {airline[2]}</Text>
                    </Text>
                    <Text>Jadwal       :
                        <Text style={Style.date}>  {dates[2]}</Text>
                    </Text>
                    <Text style={Style.lokasi}>{location[2]}                --->             {locDestination[2]}</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.airline}>  {airline[3]}</Text>
                    </Text>
                    <Text>Jadwal       :
                        <Text style={Style.date}>  {dates[3]}</Text>
                    </Text>
                    <Text style={Style.lokasi}>{location[3]}                --->             {locDestination[3]}</Text>

                </View>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    box: {
        backgroundColor: 'skyblue',
        padding: 15,
        width: '90%',
        borderRadius: 20,
        elevation: 100,
        position: 'relative',
        textAlign: 'center',
        margin: 10,
        justifyContent: 'center',
        left: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    lokasi: {
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },

    tanggal: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    maskapai: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    additional: {
        paddingTop: 10,
        textAlign: 'center',
    },

    pembatas: {
        textAlign: 'center',
    },
    info:{
        textAlign: 'center',
        fontSize: 16,
    }
})