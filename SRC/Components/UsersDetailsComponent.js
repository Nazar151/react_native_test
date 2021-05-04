import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";

const UsersDetailsComponent = ({route, navigation}) => {
    const {params: {data}} = route;
    useEffect(() => {
        navigation.setOptions({title: data.username})
    }, []);
    console.log(route.params.data)
    return <View>
        <Text>{data.phone} - {data.website}</Text>
    </View>
}

export default UsersDetailsComponent;

const styles = StyleSheet.create({});