import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {getUsers} from "../API/Api";
import UserComponent from "./UserComponent";


const UsersComponent = (props) => {
    console.log(props) /** з пропсів витягуємо навігейшин і передаєм його в юзеркомпоненту,
     в юзер компоненті будуємо баттон**/
 const {navigation} = props
const [users, setUsers] = useState([])

async function fetchData() {
    let users = await getUsers()
    setUsers([...users]);
    console.log(users)
}
useEffect(() => {
    fetchData();
}, []);
    return <View >
        <FlatList
            data={users}
            renderItem={({item}) => {return <UserComponent nav={navigation} item={item}/>}}
            keyExtractor={item => ''+item.id}/>
    </View>; /** keyExtractor вимагає стрінгу +'' **/
};

export default UsersComponent;

const styles = StyleSheet.create({});

