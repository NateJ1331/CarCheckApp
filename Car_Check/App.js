import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button,Stack} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import moment from 'moment/moment';

export default function App() {
  const [date, setDate] = useState('01/01/2000')    
  const [totaldays,setTotalDays] = useState(1)

  //Caculates how many miles you dirve per day and divides average miles needed before tire/ oil changes
  function CalculateDate(weeklymiles,miles)
  {
    dailymiles = weeklymiles/7
    setTotalDays(Math. trunc(miles/dailymiles))
  }

  //Home with Button menu
  function HomeScreen({navigation}) {

    return (
      <View  style={styles.home} on>
        <View style={styles.buttons}>
            <Button
              type="outline"
              color="black"
              title="Oil"
              onPress={() => navigation.navigate('Check Oil')}
            />
            <Text></Text>
            <Button
              paddings = {15}
              type="outline"
              color="black"
              title="Tires"
              onPress={() => navigation.navigate('Check Tires')}
            />
        </View>
      </View>
    );
  }

  //oil check screen
  function OilScreen() {
    return (
      <View style={styles.container}>
        <Text>When did you last change your oil?{/*you should change it ~6250 miles */}</Text>
        <Text></Text>
        <TextInput style={styles.input} keyboardType='numeric' onSubmitEditing={(value) => setDate(value.nativeEvent.text)}/>      
        <Text></Text>
        <Text>On average How many miles do you drive a week?</Text>
        <Text></Text>
        <TextInput style={styles.input} keyboardType="numeric" onSubmitEditing={(value) => CalculateDate(value.nativeEvent.text,6250)}/> 
        <Text></Text>
        <Text>You should change your oil by: {moment(date,"MMDDYYYY").add(totaldays, 'days').calendar()}</Text>     
      </View>
    );
  }
    //Tires Screen
    function RotateScreen() {
      return (
        <View style={styles.container}>
          <Text>When did you last rotate your tires?{/*you should change it ~7000 miles */}</Text>
          <Text></Text>
          <TextInput style={styles.input} keyboardType='numeric' onSubmitEditing={(value) => setDate(value.nativeEvent.text)}/>      
          <Text></Text>
          <Text>On average How many miles do you drive a week?</Text>
          <Text></Text>
          <TextInput style={styles.input} keyboardType="numeric" onSubmitEditing={(value) => CalculateDate(value.nativeEvent.text,7000)}/> 
          <Text></Text>
          <Text>You should rotate your tires by: {moment(date,"MMDDYYYY").add(totaldays, 'days').calendar()}</Text>     
        </View>
      );
    }
  
  const Stack = createNativeStackNavigator();
  //Navigation handling
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName= "Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Check Oil" component={OilScreen} />
      <Stack.Screen name="Check Tires" component={RotateScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

//Styles
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
  },
  home: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

buttons : {
  width: 150,
  color: "black",
  paddingBottom: 150
}
});
