import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from  "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/homescreen';
import DetailScreen from './screens/detailscreen';
 import HotelDetails from './screens/hoteldetails';
import AccountScreen from './screens/accountscreen';


const Tab=createBottomTabNavigator();
const Stack=createStackNavigator();
 /*function Home(){
  <View>
    <Text>Home</Text>
  </View>
 }*/


const App=()=>{
  return(
     <NavigationContainer >
         <Stack.Navigator screenOptions={{
          headerShown:false
         }}>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen name='DetailScreen' component={DetailScreen}/>
          <Stack.Screen name='HotelDetails' component={HotelDetails}/>
          <Stack.Screen name='AccountScreen' component={AccountScreen}/>
         </Stack.Navigator>
     </NavigationContainer>
     
  )}

export default App;