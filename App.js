import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

let todoList  =  [
  {id: 1, title: "do task #1", body: 'lorem ipsum dolor sit ameti', priority: 'high', isComplete: false},
  {id: 2, title: "do task #2", body: 'lorem ipsum dolor sit ameti', priority: 'high', isComplete: false},
  {id: 3, title: "do task #3", body: 'lorem ipsum dolor sit ameti', priority: 'high', isComplete: false},
  {id: 4, title: "do task #4", body: 'lorem ipsum dolor sit ameti', priority: 'high', isComplete: false},
  {id: 6, title: "do task #5", body: 'lorem ipsum dolor sit ameti', priority: 'high', isComplete: false},
  {id: 7, title: "do task #6", body: 'lorem ipsum dolor sit ameti', priority: 'high', isComplete: false}
]


export default function App() {
  return (
    <View style={styles.container}>
<FlatList
    data={todoList}
    renderItem={ ({item}) => {
      console.log(item)
      return <View style={styles.item}>
          <Text>{item.title} - {item.isComplete.toString() }</Text>
      </View>
    }}
    // keyExtractor={}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    item: {
      height: 200,
        marginTop: 10,
        backgroundColor: 'silver',
        border: 1,
    }
});
