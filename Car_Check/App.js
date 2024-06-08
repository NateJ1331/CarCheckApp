import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import moment from 'moment/moment';

export default function App() {
  const [date1, setDate1] = useState('01/01/2000')
  const [date2, setDate2] = useState('01/01/2000')    
  const [totaldays,setTotalDays] = useState(0)
  const today = new Date(date1)

  function CalculateDate(weeklymiles)
  {

    dailymiles = weeklymiles/7
    totaldays = 6300/dailymiles

    return totaldays

  }
  
  
  return (
    <View style={styles.container}>
      <Text>When did you last change your oil?{/*you should change it ~6200 miles */}</Text>
      <Text></Text>
      <TextInput style={styles.input}/>      
      <Text></Text>
      <Text>On average How many miles do you drive a week?</Text>
      <Text></Text>
      <TextInput style={styles.input}/> 
      <Text></Text>
      <Text>You should change your oil by: {moment(date1,"MMDDYYYY").add(10, 'days').calendar()}</Text>     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input : {
    width: 150,
    borderColor: "black",
    backgroundColor: "white",
  }
});
