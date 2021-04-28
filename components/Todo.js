import React from 'react';
import {StyleSheet, Text, View, Button, Alert, Image} from "react-native";


const Todo = ({item}) => {
    return (
        <View  style={[styles.box, styles.item]}>
            <Image
                style={ styles.tinyLogo }
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }} />
            <Text>{item.title} - {item.isComplete.toString() }</Text>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    );
};

export default Todo;

let styles = StyleSheet.create({
    box: {
        height: 200,
        width: 300,
        marginTop: 10,
        borderRadius: 4,
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'silver',
        margin: 'auto',
        textAlign: 'center',
        color: 'tomato',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginTop: 50,
    },
});