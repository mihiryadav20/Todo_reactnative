import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, } from 'react-native';

export default  function Header(){
    return(
        <View style={styles.header}>
             
            <Text style={styles.title}></Text>
        </View>
    )
    }
const styles = StyleSheet.create({
    header:{
        height: 80,
      paddingTop: 38,
      backgroundColor: '#ADEFD1FF',  

    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    }

     
});