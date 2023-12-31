import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function TodoItem({item,pressHandler}) {
  
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor:'#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,  
        color: '#ADEFD1FF',
        fontSize: 24,
    },
    txt :{
        color: '#ADEFD1FF',
        fontSize: 24,
    }
    
     
});