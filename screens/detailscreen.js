import React from "react";
import { View,Text, ScrollView,StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import {LinearGradient} from "expo-linear-gradient"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import PopularTrip from "../componet/populertrip";
import Icon from "@expo/vector-icons/MaterialIcons";
import FamousPlace from "../componet/places";
import {useNavigation} from "@react-navigation/native";
import HotelDetails from "./hoteldetails";
const DetailScreen=({route,trip})=>{
    const item=route.params;
    const navigation=useNavigation();
     return(
        <GestureHandlerRootView>
               <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.imgbox}>
                   <ImageBackground source={item.Image} style={styles.imgstyle}>
                        <View style={styles.arrowbox} >
                            <Icon name="arrow-back-ios" size={20} onPress={()=>navigation.goBack()}/>
                        </View>
                        <View style={styles.savebox}>
                            <Icon name="save-alt" size={20}/>
                        </View>
                    </ImageBackground> 
                  </View>
                  <Text style={styles.texttitle}>{item.title}</Text>
                  <View style={styles.locationbox}>
                     <Icon name="location-on" size={20} color={'orange'}/>
                     <Text style={styles.locationtext}>{item.location}</Text>
                  </View>


                  <View style={styles.secondbox}>
                     <View style={styles.durationbox}>
                        <Icon name="lock-clock" size={40} color={'orange'} flexDirection={'row'}
                         />
                         <View style={{flexDirection:'column'}}>
                            <Text style={{fontSize:13,fontWeight:'500'}}>Duration</Text>
                            <Text style={{fontSize:12}}>{item.duration}</Text>
                         </View>
                     </View>
                     <View style={styles.personnbox}>
                        <Icon name="person-add" size={37} color={'orange'} />
                        <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:13,fontWeight:'500',marginLeft:5}}>Person</Text>
                        <Text style={{fontSize:12,marginLeft:5}}>{item.person}</Text>
                        </View>
                     </View>
                     <View style={styles.ratingbox}>
                        <Icon name="star" size={40} color={'orange'}/>
                        <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:13,fontWeight:'500'}}>Rating</Text>
                        <Text style={{fontSize:12}}>{item.rating}</Text>
                        </View>
                     </View>
                  </View>

                  <Text style={styles.abouttext}>About the trip</Text>  
                  <View style={styles.descriptionbox}>
                    <Text style={styles.descriptiontext}>{item.description}</Text>
                  </View>
                  <View style={styles.bookbox}>
                     <TouchableOpacity style={styles.dollerbox} >
                        <Text style={styles.dollertext}>{item.doller}</Text>
                     </TouchableOpacity>
                     <View style={styles.booktextbox}>
                         <TouchableOpacity  onPress={()=>navigation.navigate('HotelDetails',item)}>
                            <Text style={styles.booktext}>Book Hotel</Text>
                         </TouchableOpacity>
                     </View>
                  </View>
               </ScrollView>
        </GestureHandlerRootView>
    )
}

const styles=StyleSheet.create({
    imgbox:{
       height:370,
       width:390,
       overflow:'hidden'
    },
    imgstyle:{
        height:370,
        width:390,
        resizeMode:'cover'
    },
    arrowbox:{
      height:40,
      width:40,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      marginTop:35,
      marginLeft:20
    },
    savebox:{
        height:40,
        width:40,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginRight:20,
        marginHorizontal:320,
        bottom:40
      },
      texttitle:{
        fontSize:23,
        marginLeft:20,
        marginTop:10,
        fontWeight:'bold'
      },
      locationbox:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:3,
        
      },
      locationtext:{
          fontWeight:'400',
          marginLeft:4
      },
      secondbox:{
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        justifyContent:'space-between',
        marginTop:20,
      },
      durationbox:{
        flexDirection:'row',
        backgroundColor:'#fff',
        elevation:15,
        height:60,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
      },

      personnbox:{
        flexDirection:'row',  
        backgroundColor:'#fff',
        elevation:15,
        height:60,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20   
      },
      ratingbox:{
        flexDirection:'row',
        backgroundColor:'#fff',
        elevation:15,
        height:60,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    abouttext:{
      marginTop:20,
      marginLeft:20,
      fontSize:17,
      fontWeight:'600'
    },
    descriptionbox:{
       height:110,
       width:360,
       alignItems:'center',
       justifyContent:'center',
       marginTop:10,
       marginLeft:20,
       marginRight:10,
    },
    descriptiontext:{
           fontSize:14,
           fontWeight:'500'
    },  
    bookbox:{
         marginTop:90,
         flexDirection:'row',
         justifyContent:'space-between',
         marginLeft:20,
         marginRight:20
    },
    dollerbox:{
        height:60,
        width:150,
        backgroundColor:'#000080',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
      },
    dollertext:{
      color:'#ffffff',
      fontWeight:'600',
      fontSize:16
    },
    booktextbox:{
      height:60,
      width:150,
      backgroundColor:'#000080',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10

    },
    booktext:{
      color:'#ffffff',
      fontWeight:'600',
      fontSize:16
    }


})
export default DetailScreen;