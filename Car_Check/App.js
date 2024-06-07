import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [date, setDate] = useState('01/11/2000')

  const clickHandler = () => {
    setDate('10/15/2033');
  }

  return (
    <View style={styles.container}>
      <Text>The Date is {date}</Text>
      <Text></Text>
      <View style={styles.input}>
        <TextInput/>
      </View>
      <View style ={styles.buttonContainer}>
        <Button title = 'Change Date' onPress={clickHandler} />
      </View>
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

  buttonContainer : {
    marginTop: 20
  },

  input : {
    borderStyle : 'solid',
  }
});
