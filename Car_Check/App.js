import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import moment from 'moment/moment';

export default function App() {
  const [date, setDate] = useState('01/01/2000')    
  const [totaldays,setTotalDays] = useState(1)

  function CalculateDate(weeklymiles)
  {
    dailymiles = weeklymiles/7
    setTotalDays(Math. trunc(6250/dailymiles))
  }
  
  
  return (
    <View style={styles.container}>
      <Text>When did you last change your oil?{/*you should change it ~6250 miles */}</Text>
      <Text></Text>
      <TextInput style={styles.input} keyboardType='numeric' onSubmitEditing={(value) => setDate(value.nativeEvent.text)}/>      
      <Text></Text>
      <Text>On average How many miles do you drive a week?</Text>
      <Text></Text>
      <TextInput style={styles.input} keyboardType="numeric" onSubmitEditing={(value) => CalculateDate(value.nativeEvent.text)}/> 
      <Text></Text>
      <Text>You should change your oil by: {moment(date,"MMDDYYYY").add(totaldays, 'days').calendar()}</Text>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 50,
    paddingBottom: 150,
    backgroundColor: '#eee',
    alignItems: 'left',
    justifyContent: 'center',
  },

  input : {
    width: 150,
    borderColor: "black",
    backgroundColor: "white",
  }
});
