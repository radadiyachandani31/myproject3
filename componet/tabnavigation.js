import React from "react";
import { View,Text } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homescreen";
import DetailsScreen from "../screens/detailsscreen";
import Icon from "@expo/vector-icons/MaterialIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import HotelDetails from "../screens/hoteldetails";
const Tab=createBottomTabNavigator();
const TabNavigation=()=>{
    return(
      <Tab.Navigator
      initialRouteName="OnboardScreen"
       screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
         
      }}>

        <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{
            tabBarIcon: ({ focused, size }) => (
                <MaterialIcons name="home" size={size} color={focused ? 'blue' : 'gray'} />
              ),
           
        }}/>
           <Tab.Screen name="DetailScreen" component={SearchScreen}
        options={{
            tabBarIcon: ({ focused, size }) => (
                <MaterialIcons name="info" size={size} color={focused ? 'blue' : 'gray'} />
              ),
           
        }}/>
           <Tab.Screen name="HotelDetails" component={HotelDetails}
        options={{
            tabBarIcon: ({ focused, size }) => (
                <MaterialIcons name="hotel" size={size} color={focused ? 'blue' : 'gray'} />
              ),
           
        }}/>
        
      </Tab.Navigator>
    )
}
export default TabNavigation;