import React, {Component} from 'react';
import {View, Text, Switch, Image, ScrollView, FlatList, StyleSheet} from 'react-native';
import { Chip, ListItem,  Input, SocialIcon, SafeAreaView} from 'react-native-elements';
import { SafeAreaProvider,  } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { colors } from "../constant/Colors";
import Search from './Search';
import { product } from './ProductData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  Header,
  Icon,
  Button,
  Text as Etext,
  FontAwesomeIcon,
} from 'react-native-elements';


const Product=({navigation})=>{


  // const [data, setData] = useState([]);
  // const  categoryData =  (vegitable) => {
  //      console.log("vegitable", vegitable);
  //        const photoItem = vegitable.filter((ele) =>{
  //         return ele.title === route.params.category;
  //       })
  //       console.log("json", json);
  //       setData(photoItem);
  //       console.warn(route.params.id);
  //       console.log(photoItem);
  //   }
  
  //   useEffect(() =>{
  //     categoryData();
  //   },[])
    


    return(
        <View style={{marginHorizontal:10,}}>

        <View style={{height: wp('15%'),}}>
          <Search/>
        </View>

          <View style={{marginTop:20,}}>
            <Text style={styles.bakery_title}> Bakery, Cakes & Dairy</Text>
          </View>
          <View style={[styles.lineStyle, {marginVertical:20,},]}></View> 

        <FlatList
        
          data={product}
          renderItem={(element) =>{
            console.log(element.item.product);
            
        return(
        //   <View style={{ }}>
               
            <View style={styles.todoist_container}>
                <View style={{}}>
                  <Image source={{uri: element.item.imageLink}}
                  
                   style={styles.productArrayImage} />
                </View>

                 <View style={{ alignSelf:'flex-start',}}>
                  <Text style={styles.bakery_categoryTitle}  onPress={() => navigation.navigate('productdetails',{name:element.item.name})}>{element.item.name?element.item.name:null}</Text>
                  <Text style={styles.listArrayTitle}>{element.item.title}</Text>
                  <Text style={styles.product_cost}>{element.item.cost?element.item.cost:null}</Text>
                </View>
            </View>

        //   {/* </View> */}

        ) }

        }
          
        keyExtractor={(item, index) => index}
                       numColumns={2}
       />
       
       </View>
        
    )
}


const styles = StyleSheet.create({

    lineStyle:{
        borderColor:colors.danger,
        borderWidth:1,
      },

    product_cost:{
       color:colors.primary_shadow,
    },

    bakery_categoryTitle:{
        fontSize:18,
        color:colors.black,
        //fontWeight:"500",
    },

    bakery_title:{
       fontSize:19,
       color:colors.black,
       fontWeight:"500",
    },
    
    productArrayImage:{
        // height:160,
        //  width:160,
        width: wp('40%'),
        height: wp('40%'),
         borderRadius:6,
      },
  
      todoist_container:{
        width: wp('50%'),
        //backgroundColor: "#ffffffd9",
        padding:10,
        borderRadius: 10,
        
       
 },
})




export default Product;