
import React from 'react'
import { ImageBackground, Image, StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity, SearchBar} from "react-native";
import { Button } from "react-native-elements";
import { colors } from "../constant/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const Search = (navigation) => {
  return (
    <View style={styles.search_container} >
      {/* <ImageBackground source={require('../assets/images/user_bg.jpg')} resizeMode="cover" style={styles.bg_image}>
         */}
        {/* <Text style={{ fontSize:17, color:"white", marginLeft:30, }}>Search Here...</Text> */}
         <TextInput style={styles.input_field}  placeholder="Type Here..."     placeholderTextColor = "#bbb8b3"/>
         <Ionicons name='ios-search-outline' color={colors.primary_yellow} size={25} style={{ position:"absolute", left:28, top:28,}}/>
       {/* </ImageBackground>   */}
       
      </View>

    //    <View style={[styles.lineStyle, {marginVertical:20,},]}></View> 
  )
}

const styles = StyleSheet.create({
    
  lineStyle:{
    //marginBottom:20,
    borderColor:"#e09031",
    borderWidth:1,
    
  },

  search_container:{
    flex: 1, 
    flexDirection: 'column', 
    //backgroundColor:colors.primary_shadow,
    height:60,
    justifyContent:"center",
    alignItems:"center",
  },
  

  input_field:{
    marginTop:20,
    borderWidth:2, 
    borderColor:colors.primary_yellow, 
    paddingLeft:40,
    paddingHorizontal:5, 
    paddingVertical:5, 
    borderRadius:20, 
    fontFamily:"regular",
    color:"black",
     fontSize:16,
     //marginTop:15,
     //marginLeft:30,
    width:"90%",
    height:40,
    //justifyContent:"center",
},

})

export default Search

