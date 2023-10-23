import React, {useState} from 'react'; 
import { StyleSheet, Text, TextInput,Button,View } from 'react-native';

export default function Addtodo({submitHandler}){
    const [text,setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='add a new task'
            onChangeText ={changeHandler}
            
            placeholderTextColor="#ADEFD1FF"
            />
            <View style={styles.btst}>
            <Button 
            
            onPress={()=>submitHandler(text)} title='add the task' color='black'
            fontFamily='Roboto' placeholderTextColor="black"
            
            />
              </View>  
        </View>
    )
}


const styles = StyleSheet.create({
    
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        height: 50,
        borderWidth: 1,
        borderColor:'#ADEFD1FF',
        opacity: 1,
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#ADEFD1FF',
        borderRadius: 10,
     
    },
    btst: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black",
    
    overflow: "hidden",
    marginBottom: 10,
    fontFamily:'Roboto',
    
    }
    
  });
  