import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import UsersComponent from "./SRC/Components/UsersComponent";
import UserComponent from "./SRC/Components/UserComponent";
import PostsComponent from "./SRC/Components/PostsComponent";
import UsersDetailsComponent from "./SRC/Components/UsersDetailsComponent";

const StackNavigator = createStackNavigator();
export default function App() {

    return (
              <NavigationContainer>
                  <StackNavigator.Navigator>
                      <StackNavigator.Screen name={'UserComponent'} component={UsersComponent}/>
                      <StackNavigator.Screen name={'Posts'} component={PostsComponent}/>
                      <StackNavigator.Screen name={'UserDetails'} component={UsersDetailsComponent}/>

                  </StackNavigator.Navigator>
{/*    <View>*/}
{/*<UsersComponent/>*/}
{/*    </View>*/}
              </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
