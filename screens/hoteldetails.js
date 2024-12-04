import {React} from "react"
import { View,Text,StyleSheet, ScrollView,Image,FlatList ,TouchableOpacity} from "react-native"
import Icon from "@expo/vector-icons/MaterialIcons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import RoomDetails from "../componet/room";
const HotelDetails=({item,route})=>{
    const navigation=useNavigation()
     const page=route.params;
     
     
      
      const RommType=()=>{
        return(
            <FlatList
            data={RoomDetails}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
               <View style={styles.mainroombox}>
                  <View style={styles.imageconatiner}>
                      <Image source={item.roomImage} style={styles.roomimagestyle}/>
                  </View>
                       <Text style={styles.titletext}>{item.roomtype}</Text>
                       <Text style={styles.pricetext}>{item.price}</Text>
                       {/* <Text style={styles.ratingtext}>{item.rating}</Text> */}
               </View>
            )}/>
        )
      }
    return(
        <GestureHandlerRootView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.arrowbox} >
                   <Icon name="arrow-back-ios" size={20} onPress={()=>navigation.goBack()}/>
                </View>
                <View style={styles.savebox}>
                    <Icon name="save-alt" size={20}/>
                </View>
                <Text style={styles.findtext}>Find your hotel</Text>
               <View style={styles.imgebox}>
                   <Image source={page.hotelImage} style={styles.imgstyle}/>
               </View>
               <Text style={styles.roomtext}> Room details</Text>
               <RommType/>
            </ScrollView>
            <TouchableOpacity style={styles.booktextbox} onPress={()=>navigation.navigate("HomeScreen")}>
                 <Text style={styles.booktext}>Book Hotel</Text>
            </TouchableOpacity>
        </GestureHandlerRootView>
    )
}
export default HotelDetails;
const styles=StyleSheet.create({
    arrowbox:{
        height:40,
        width:40,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginTop:35,
        marginLeft:20
      },
      savebox:{
          height:40,
          width:40,
          backgroundColor:'gray',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:20,
          marginRight:20,
          marginHorizontal:320,
          bottom:40
      }    ,
      findtext:{
        fontSize:26,
        marginTop:-40,
        marginLeft:20,
        fontWeight:'700',
        color:'#000080'
      } ,
     
      imgbox:{
        height:300,
        width:350,
        overflow:'hidden',
        },
     imgstyle:{
         height:300,
         width:350,
         resizeMode:'cover',
         borderRadius:10,
         borderColor:'black',
         borderWidth:5,
         marginLeft:20,
         marginRight:20,
         marginTop:10
     },
     roomtext:{
        fontSize:18,
        marginTop:10,
        marginLeft:20,
        fontWeight:'700',
        color:'#000080'
     },
     mainroombox:{
        height:270,
        width:250,
        marginTop:5,
        elevation:10,
        backgroundColor:'#D3D3D3',
        marginHorizontal:10,
        borderRadius:30,
     },
     imageconatiner:{
        height:190,
        width:250,
        overflow:'hidden',
        borderRadius:20
     },
     roomimagestyle:{
        height:190,
        width:250,
        resizeMode:'cover'
      },
    
     titletext:{
     textAlign:'center',
     marginLeft:20,
     fontSize:17,
     fontWeight:'700',
     marginTop:5
     },
     pricetext:{
        textAlign:'center',
        marginLeft:20,
        fontSize:15,
        fontWeight:'500',
     },
     booktextbox:{
        height:60,
        width:180,
        backgroundColor:'#000080',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginBottom:20,
        marginLeft:100
      },
      booktext:{
        color:'#ffffff',
        fontWeight:'600',
        fontSize:16
      }
})