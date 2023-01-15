import React from "react" ;
import { ImageBackground, Image, StyleSheet, View, ScrollView, Text,FlatList, TextInput, TouchableOpacity, SearchBar} from "react-native";
import { Button } from "react-native-elements";
import { colors } from "../constant/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Search from "./Search";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Category=({navigation})=>{

  const vegitable = [
  
    {
       
      title: 'Cakes & Dairy',
      imageLink:'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg',
      category:'Bakery',
    }, 

    {
       
      title: 'Vegetables',
      imageLink:'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6',
      category:'Vegetable',
    },

    {
       
      title: 'Cleaning',
      imageLink:'https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg?rev=2bd4d26e45c54499acab7a4007dbb210',
      category:'cleaning',
    },
   
  ]; 

    return(

    
        <View style={styles.main_container}> 
        

      <ScrollView>
      
           <View>
            <Search/>
          </View>

          <View style={{marginVertical:20, marginLeft:20,}}>
            <Text style={styles.Category_title}>Products Categories</Text>
          </View>
          <View style={[styles.lineStyle, {marginVertical:10,},]}></View> 




          <FlatList
          data={vegitable}
          renderItem={(element) =>{
            console.log(element.item.vegitable);
            
        return(
           
           <View style={styles.myOrder_container}>

            <View style={{flex: 0, flexDirection: 'row', justifyContent:"space-evenly", alignItems:"center", marginVertical:0,}}>
                <View style={styles.category_box}>
                  <Image source={{uri: element.item.imageLink}} style={styles.category_img} />
                  <Text style={styles.order_tex} onPress={() =>navigation.navigate('vendorList',{category:element.item.category})}>{element.item.title}</Text>
                </View>

                 {/* <View style={{ alignSelf:'flex-start',}}>
                  <Text style={styles.bakery_categoryTitle}  onPress={() => navigation.navigate('productdetails',{name:element.item.name})}>
                    {element.item.name?element.item.name:null}</Text>
                  <Text style={styles.listArrayTitle}>{element.item.title}</Text>
                 </View> */}
            </View>
            </View>



        ) }

        }
          
        keyExtractor={(item, index) => index}
                       numColumns={3}
       />
      

      


      </ScrollView>
        
            
        </View>
     
    )
}

const styles = StyleSheet.create({

  category_Image:{
    width: wp('100%'),
    height: wp('80%'),
  },

  Category_title:{
    fontSize:19,
    color:colors.black,
    fontWeight:"500",
 },

  lineStyle:{
    borderColor:colors.danger,
    borderWidth:1,
  },


  service_container:{
    backgroundColor: "#ffffffd9",
    marginVertical:20,
    marginHorizontal:20,
    borderRadius:6,
    width: wp('80%'),
    height: wp('80%'),
    //overflow:"hidden",
    //shadowOffset: { width: 0, height: 1 },
    //shadowOpacity: 0.3,
    //shadowRadius: 1,  
    elevation: 1,
    shadowColor: '#52006A',
  },

  order_tex:{
    fontSize:14,
    fontWeight:"500",
    alignSelf:"center",
    textAlign:"center",
    color:colors.black,
  },

  myOrder_container:{
    //backgroundColor: "#ffffffd9",
    //padding:90,
    marginVertical:20,
    marginHorizontal:5,
    borderRadius:6,
    },

  fav_container:{
     flex: 1, 
     flexDirection: 'row', 
     justifyContent:"center",
     position:"absolute",
     top:180,
     //left:40,
  },

  fav_tex:{
    color:"white",
    fontSize:15,
    alignSelf:"center",
  },
  profile_name_container:{
   flex:1,
   flexDirection:"row",
  flexWrap:"wrap",
   //width:"100%",
   width: wp('80%'),
  },
  profile_name:{
    width: wp('40%'),
    height: wp('80%'),
  },

  bg_image: {
    flex: 1,
    flexDirection:"row",
    //justifyContent: "center",
    height: wp('80%'),
    alignItems:"center",
      //justifyContent:"center",
   
  },

    userProfile_to_container:{
        justifyContent:"center",
        //width:"100%",
        //height:80,
    },
    userProfile_container_text:{
      color:'white',
      // alignSelf:"center",
       fontSize:22,
       marginLeft:10,
        
    },
    category_box:{
      width: wp('30%'),
      height: wp('50%'),
     
    overflow:"hidden",
    shadowColor: '#000',
    //shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 6,  
    elevation: 3,
    },

    category_img:{
       marginLeft:0,
      //  width: "100%",
      // height: 160,
      width: wp('30%'),
      height: wp('40%'),
      resizeMode: 'cover',
      borderRadius:5,
    },

    userProfile_form:{
        //marginTop:70,
        marginHorizontal:10,
        
    },
    user_edit_btn:{
      alignItems:"center",
    },

    userProfile_edit_btn: {
        backgroundColor: "#b544e1",
        textAlign:"center",
        color:"white",
        borderRadius:60,
        paddingBottom:10,
        paddingTop:10,
        marginTop:20,
        fontSize:19,
        width: wp('50%'),
        alignContent:"center",
        alignItems:"center",
        
    },

    main_container:{
        //marginHorizontal:20,
        //alignItems: 'center',
       // flex: 1,
        //justifyContent: 'center',
        //backgroundColor: "#7fe3a4",
    },

    logSpan:{
        fontWeight: 'bold',
        //color:'black',
    },


    inner_container:{
        //backgroundColor: "#ffffffd9",
        padding:20,
        borderRadius: 20,
        marginTop:100,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"flex-end",
        //borderTopRightRadius:100,
        // overflow:"hidden",
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 6,  
        // elevation: 5,
      },

        position:{
        width: 0,
        height: 0,
        borderRadius:10,
        borderLeftWidth: 30,
        borderRightWidth: 200,
        borderBottomWidth: 150,
        top:-100,
        left:-20,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',

    },



  });



export default Category