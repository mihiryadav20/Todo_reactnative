import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Alert, Text, TextInput, View,Button, FlatList,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import Addtodo from './components/addtodo';

export default function App() {
   const[todos, setTodos] = useState([
    
   ]);

   const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key!=key);
    });
  }
    const submitHandler = (text) =>{
      if(text.length>3){
      setTodos((prevTodos)=>{
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
      }
      else{
        Alert.alert('OOPSIE','Write a bigger todos, BIACH!',[
          {text:'I understand',onPress: ()=> console.log('alert closed')}
        ])
      }
   }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      console.log('dismissed keyboard');
    }}>
    <View style={styles.container}>
      <Header/>
     <View style={styles.content}>
      <Addtodo submitHandler={submitHandler}/>
      {/* <Text style={styles.txt}>You have the following:</Text> */}
      {/* {to form} */}
      <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({item})=>(
         <TodoItem item={item} pressHandler={pressHandler}/>
        ) }
      />
      </View>
     </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00203FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontFamily: 'Roboto',
    
  },
  content:{
    flex: 1,
    padding:50,
    
  },
  list: {
    flex: 1,
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
     
  },
  txt :{
    color: '#ADEFD1FF',
    fontSize: 24,
    fontFamily: 'Roboto',
    
}
  
});
