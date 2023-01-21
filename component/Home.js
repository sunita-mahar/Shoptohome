import React from "react" ;
import { ImageBackground, Image, StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity,} from "react-native";
import { Button, colors } from "react-native-elements";
import Slider from "./Slider";
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomMenu from "./BottomMenu";
import ToDoList from './ToDoList';
import Home_Category_Array from './Home_Category_Array';
import Top_Product_Array from "./Top_Product_Array";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


 
export const Home=()=>{

  return(

 
 <View style={styles.main_container}>

  <ScrollView>
  
    <View style={styles.home_top_container} >
      <View style={{flex: 0, flexDirection: 'row',  alignItems:"center", marginVertical:20, width: wp('100%'),}}>
        <View style={{}} >
          <Ionicons name='md-location' color={'#e35827'} size={33} style={{paddingLeft:10,}}/>
        </View>
        <View style={{}} >
        <Text style={styles.address_tex}> Shiva Puri Colony</Text>
          <Text style={styles.add_below_tex}>Hakikat Nager, Jind</Text>
        </View>
        <View style={{ width: wp('40%'), }}>
        <Ionicons name='search-circle' color={'#e35827'} size={33} style={{ alignSelf:"flex-end", marginRight:10,  }}/> 
       </View>
       <View style={{}} >
         <Image source={require('../assets/images/homeUser.png')} style={styles.home_profile_img}/>
        </View>
       </View>
    </View>
    
    <View>
       <Slider/>
    </View>
  
          <View style={styles.inner_container}>
            <View style={{flex:1, flexDirection:"row",}}>
              <View  style={{ width: wp('50%'),}} >
                 <Image source={require("../assets/images/banner1.webp")}style={styles.home_banner_image} />
                <Text style={styles.banner_below_title}>Double Flair Dress</Text> 
              </View>
             
              <View style={{width: wp('50%'),}}>
              <Image source={require("../assets/images/banner2.png")}style={styles.home_banner_image} />
               <Text style={styles.banner_below_title}>Royal Pink Dress </Text>
              </View>
            </View>  
          </View>

          <View>
             <Home_Category_Array/>
          </View>

          <View style={{marginTop:-20,}}>
            <ToDoList/>
          </View>

          <View style={{marginTop:20,}}>
           <Top_Product_Array/>
          </View>

          <View style={styles.menuStyle}>
            <View style={[styles.lineStyle, {marginVertical:20,},]}></View>
            <BottomMenu/>
            <View style={styles.lineStyle}></View>
          </View>

        </ScrollView> 
  
    </View>
    
    )
}

const styles = StyleSheet.create({
    
  address_box:{

  },

  home_profile_img:{
    height: wp('10%'),
    width: wp('10%'),
  },

  address_tex:{
    color:colors.black,
    fontSize:16,
    fontWeight:"700",
  },

  add_below_tex:{
    fontSize:13,
    paddingLeft:5,
  },

    login_tx: {
        backgroundColor: "#1c8c37",
        textAlign:"center",
        color:"white",
        borderRadius:60,
        paddingBottom:8,
        paddingTop:8,
         
    },

    main_container:{
         flexDirection :"row",
        
    },

    inner_container:{
      flex: 1, 
      flexDirection: "row",
      flexWrap:"wrap",
      marginTop:10,
    },

    banner_bg_image:{
       height: wp('100%'),
       justifyContent: 'center',
       marginHorizontal:21,
       elevation: 6,
    shadowColor: 'black',
    },


    home_banner_image:{
        height: wp('50%'),
        width: wp('45%'),
         alignSelf:"center",
          resizeMode:"contain",
          borderRadius:8,
      },

    
    bg_image: {
      flex: 1,
      justifyContent: "center",
    },

    
    banner_above_title:{
      height: wp('100%'),
       marginLeft:20, 
    },

    banner_title:{
      fontSize:17,
      marginTop:20,
      marginBottom:20,
      fontWeight:"800",
    },

    banner_below_title:{
           textAlign:"center",
           top:10,
     },
    
       

    position:{
        borderRadius:10,
        borderLeftWidth: 30,
        borderRightWidth: 200,
        borderBottomWidth: 150,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',

    },

    signin:{
        alignItems: 'center', 
        fontSize:30,
        marginBottom:10, 
        textAlign:"center", 
        fontWeight:"700", 
    },

    input_field:{
        borderWidth:1, 
        borderColor:"black", 
        paddingHorizontal:5, 
        paddingVertical:3, 
        borderRadius:1, 
        fontFamily:"regular",
         fontSize:16,
         marginTop:5,
         borderRadius:3,
    },

    forget:{
        alignItems: 'center',
        textAlign:"center",
        marginTop:10,
        marginBottom:10,
    },

    triangle: {
   
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
  },
    
  menuStyle:{
    
  },
  
  lineStyle:{
    marginBottom:2,
    borderColor:"#ffffffd9",
    borderWidth:0.7,
    
  },

  

  });



export default Home