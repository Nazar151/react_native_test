import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {getUsers} from "../API/Api";


const UserComponent = (props) => {
    const {item, nav} = props
    return <View style={styles.box} >
        <Text>name: {item.name}</Text>
     <Text>email: {item.email}</Text>
        <Button title={'user details'} onPress={() => {nav.navigate('UserDetails', {data: item});
        }}/>
    </View>;
};

export default UserComponent;
const styles = StyleSheet.create({
    box: {
        marginTop: StatusBar.currentHeight || 30,
        height: 100,
        backgroundColor: 'silver',
        marginBottom: 3,
    }
});