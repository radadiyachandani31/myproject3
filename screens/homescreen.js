import React from "react";
import { useState } from "react";
import { View,Text,StyleSheet ,TextInput, TouchableOpacity, ImageBackground, Dimensions,Image} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons"
import { FlatList, ScrollView } from "react-native-gesture-handler";
import FamousPlace from "../componet/places";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import PopularTrip from "../componet/populertrip";
import {LinearGradient} from "expo-linear-gradient"
import {useNavigation} from "@react-navigation/native"
import AntDesign from "@expo/vector-icons/AntDesign"
const {width}=Dimensions.get('screen');
const Cart_width=width/2 -20

const HomeScreen=({navigation})=>{

  const PlaceList=()=>{
    const[isliked,SetIsLiked]=useState(false)
    const navigation=useNavigation();
    return(
      <View>
        <FlatList
        data={FamousPlace}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
           <TouchableOpacity style={styles.placebox} onPress={()=>navigation.navigate('DetailScreen',item)}>
              <View style={styles.imageconatiner}>
               <ImageBackground source={item.Image} style={styles.imagestyle}>
                     <Text style={styles.titletext}>{item.title}</Text>
                     <Text style={styles.locationtext}>{item.location}</Text>
                     <TouchableOpacity style={styles.favrioutebox}
                      onPress={()=>SetIsLiked(!isliked)}>
                      {
                        isliked ?
                        ( <AntDesign name="heart" size={20} color={'red'}/>) :
                        ( <AntDesign name="hearto" size={20} color={'black'}/>)
                      }
                     </TouchableOpacity>
                 </ImageBackground>
              </View>
           </TouchableOpacity>
        )}/>
      </View>
    )
  }
 
  const PopularTripList=({trip})=>{
    const[isliked,SetIsLiked]=useState(false)
    return(
     
      <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen',trip)}>
          <View style={styles.populercard}>
             <View style={styles.imagebox}>
                 <ImageBackground source={trip.Image} style={styles.imgstyle}/>
             </View>
             <Text style={styles.tripname}>{trip.title}</Text>
             <Text style={styles.triplocation}>{trip.location}</Text>
             <TouchableOpacity style={styles.tripfavconatiner}
              onPress={()=>SetIsLiked(!isliked)}>
              {
                isliked ?
                ( <AntDesign name="heart" size={20} color={'red'}/>) :
                ( <AntDesign name="hearto" size={20} color={'black'}/>)
              }
             </TouchableOpacity>
          </View>
       </TouchableOpacity>
        
    )
  }
  return(
     <GestureHandlerRootView>
       <LinearGradient colors={["#FDF0F3","#FFFBFC"]} style={styles.mainconatiner}>
         <View>
          <View style={styles.travelcontainer}>
            <Icon name="list" size={25} marginLeft={15} marginTop={7}/>
            <Text style={styles.traveltext}>Travel App</Text>
            <Icon name="notifications" size={25} marginRight={15} marginTop={7}/>
          </View>
          <View style={styles.searchconatiner}>
              <Icon name="search" size={20} marginTop={10} marginLeft={10}/>
              <TextInput placeholder="search your trips" style={styles.textinputstyle}/>
          </View>
          <View>
             <PlaceList/>
          </View>
          <View style={styles.populerline}>
              <Text style={styles.populartext}>Popular Trips</Text>
              <Text style={styles.alltext}>See All</Text>
          </View>
          <ScrollView  showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:400}}>
            <FlatList 
            numColumns={2}
            data={PopularTrip}
             showsVerticalScrollIndicator={false}
             renderItem={({item})=>(
               <PopularTripList trip={item}/>
             )}/>
          </ScrollView>
          
        </View>
       </LinearGradient>
      </GestureHandlerRootView>
      )
    }

const styles=StyleSheet.create({
  mainconatiner:{
    flex:1
  }, 
  travelcontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30
  },
  traveltext:{
    fontSize:20,
    fontWeight:'bold'
  },
  searchconatiner:{
     height:45,
     width:340,
     backgroundColor:'blue',
     flexDirection:'row',
     marginLeft:40,
     borderRadius:10,
     backgroundColor:'#fff',
     marginTop:10,
     marginLeft:20,
     borderColor:'black',
     borderWidth:1
     },
  textinputstyle:{
       fontSize:13,
       marginLeft:5
  },
  placebox:{
    height:190,
    width:250,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#fff',
    elevation:10,
    marginTop:20,
    borderRadius:20
  },
  imageconatiner:{
    height:190,
    width:250,
    overflow:'hidden',
    borderRadius:20
  },
  imagestyle:{
    height:190,
    width:250,
    resizeMode:'cover'
  },
  titletext:{
     top:130,
     fontSize:18,
     color:"#ffffff",
     fontWeight:'800',
     marginLeft:10
  },
  locationtext:{
     top:130,
     marginLeft:10,
     fontSize:15,
     color:"#ffffff",
     fontWeight:'400'
  },
  favrioutebox:{
    height:35,
    width:35,
    borderRadius:18,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:190,
    bottom:40
    },
    populerline:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginTop:10,
       marginLeft:10,
       marginRight:10
    },
    populartext:{
       fontSize:16,
       fontWeight:'bold'
    },
    alltext:{
        fontSize:13,
        color:'blue',
        fontWeight:'300'
    },
    populercard:{
      height:220,
      width:Cart_width,
      backgroundColor:'#fff',
      elevation:13,
      marginTop:10,
      marginHorizontal:10,
      marginBottom:10,
      borderRadius:15,
     
    },
    imagebox:{
        height:160,
        width:Cart_width,
        overflow:'hidden',
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    imgstyle:{
        height:160,
        width:Cart_width,
        resizeMode:'cover'
    },
    tripname:{
       fontSize:14,
       marginLeft:10,
       fontWeight:'600'
    },
    triplocation:{
      fontSize:12,
      marginLeft:10,
  },
    tripfavconatiner:{
       height:30,
       width:30,
       backgroundColor:'#fff',
       borderRadius:15,
       alignItems:'center',
       justifyContent:'center',
       marginHorizontal:130,
       elevation:20,
       bottom:35
    }
})
 
export default HomeScreen;