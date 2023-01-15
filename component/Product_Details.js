import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { useState, useEffect } from "react";
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Unorderedlist from 'react-native-unordered-list';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from "../constant/Colors";
import Search from './Search';
import { product } from './ProductData';



const Product_Details = ({route,navigation}) => {

   
const [data, setData] = useState([]);

   const  productData = (product) => {
      const photoItem = product.filter((ele) =>{
        return ele.name == route.params.name;
      })
      setData(photoItem);
      console.log("filterData" ,photoItem);
  
  }

  useEffect(() =>{
    productData(product);
  },[])
  


  return (
    
    <View>
    <ScrollView> 
      
      <View style={{marginTop:20,}}>
            <Text style={styles.bakery_title}> Bakery, Cakes & Dairy</Text>
          </View>
          <View style={[styles.lineStyle, {marginVertical:20,},]}></View> 
      
      
      {
        data.length!=0?
        <FlatList
        
          data={data}
          renderItem={(element) =>{
            console.log("element" ,element)
          return(  
        
          <View key={element.item.index}>
             
            <View style={styles.todoist_container} >

                <View style={{ width: wp('80%'),alignSelf:'center', }}>
                  <Image source={{uri:element.item.imageLink}} style={styles.product_details_img} />
                </View>

                   <Text style={styles.top_title}>{element.item.product_top_title}</Text>

                 <View style={{flex:0, flexDirection:'row', marginVertical:8}}>
                   <Text style={styles.product_detail_cost}>{element.item.cost}</Text>
                   <Text style={styles.mrp}>{element.item.mrp}</Text>
                   <Text style={styles.priceOff}>{element.item.price_off}</Text>
                  </View>
                    <Text style={styles.cate_title}>{element.item.title}</Text>
                      {/* <Text style={styles.listArrayTitle}>{element.item.name}</Text> */}
            </View>

           
                  <View style={{flex: 1, flexDirection: 'row', backgroundColor:"white",  height: wp('20%'), justifyContent:'space-evenly', alignItems:'center', }}>
                    <View style={styles.returnColumn } >
                      <View style={{alignItems:"center",}}>
                        <Ionicons name='checkbox' color={colors.primary_light} size={22}/>
                      </View>
                      <Text style={styles.returnPolicy}>7 Days Return</Text>
                    </View>

                    <View style={styles.returnColumn } >
                      <View style={{alignItems:"center",}}>
                        <FontAwesome5 name='comments-dollar' color={colors.primary_light} size={22}/>
                      </View>
                      <Text style={styles.returnPolicy}>Cash On Delivery Available</Text>
                    </View>
                    
                    <View style={{ width: wp('30%'),  height: wp('10%'), justifyContent:"center",}} >
                      <View style={{alignItems:"center",}}>
                        <MaterialCommunityIcons name='truck-fast' color={colors.primary_light} size={22}/>
                      </View>
                      <Text style={styles.returnPolicy}>On Time Delivery</Text>
                    </View>
                  </View>

                  <View style={{flex: 1, flexDirection: 'column', backgroundColor:"white",  height:320,marginVertical:8, }}>
                    <Text style={styles.aboutProduct}>About This Product</Text>
                    <View style={styles.about_product } >
                       <Text style={styles.productDiscription}>
                        The richness of the eggless chocolate vanilla cupcakes is sure to captivate you.
                        The Fresho Signature Muffine/Cup Cake - Strawberry is baked to perfection
                       </Text>
                     </View>
                    
                     <Text style={styles.aboutProduct}>Ingredients</Text>
                     <View style={styles.about_product_ingredient } >
                       {/* <Text style={styles.productIngridient}>
                        CupNestlé MILKMAID, cupRefined Flour, tspBaking Powder, tspBaking Soda, A pinch of Salt
                        tbspMelted Butter/Oil, cupWater, tspVanilla Extract (optional),tbspLemon Juice/Apple Vinegar
                       </Text> */}
                        
                        <Unorderedlist color='white'> 
                        <Unorderedlist bulletUnicode={0x2023}><Text>CupNestlé MILKMAID,</Text></Unorderedlist> 
                          <Unorderedlist bulletUnicode={0x2023}><Text>cupRefined Flour,</Text></Unorderedlist>
                          <Unorderedlist bulletUnicode={0x2023}><Text>tspBaking Powder,</Text></Unorderedlist>

                          <Unorderedlist bulletUnicode={0x2023}><Text>tspBaking Soda,</Text></Unorderedlist>
                          <Unorderedlist bulletUnicode={0x2023}><Text>A pinch of Salt tbspMelted Butter/Oil,</Text></Unorderedlist>
                          <Unorderedlist bulletUnicode={0x2023}><Text>cupWater,</Text></Unorderedlist>

                          <Unorderedlist bulletUnicode={0x2023}><Text>tspVanilla Extract (optional),</Text></Unorderedlist>
                          <Unorderedlist bulletUnicode={0x2023}><Text>tbspLemon Juice/Apple Vinegar</Text></Unorderedlist>
                          </Unorderedlist> 
                     </View>
                  </View>


                  <View style={{flex: 1, flexDirection: 'row', backgroundColor:"white",  width: wp('100%'),  justifyContent:'space-evenly', alignItems:'center', }}>
                    <View style={styles.add_cart } >
                      <View style={{alignItems:"center", marginRight:5,}}>
                        <Ionicons name='ios-bookmarks' color={colors.white} size={22}/>
                      </View>
                      <Text style={styles.addCart_btn}>Save For Later</Text>
                    </View>

                    
                    <View  style={{flexDirection:'row', alignItems:'center',  width: wp('50%'),  height: wp('15%'), justifyContent:"center", backgroundColor:colors.danger,}} >
                      <View style={{alignItems:"center",  marginRight:5,}}>
                        <MaterialIcons name='shopping-cart' color={colors.white} size={22}/>
                      </View>
                      <Text style={styles.addCart_btn}  onPress={() => navigation.navigate("cart")}>Add To Cart</Text>
                    </View>
                    

                  </View>
                  
          </View>
        )}}
        /> :null
     
      }
    </ScrollView>
    </View>
    
  )
}


const styles = StyleSheet.create({

  about_product_ingredient:{
       marginLeft:20,
  },

  addCart_btn:{
    textAlign:'center',
    fontSize:15,
    color:colors.white,
  },

  add_cart:{
    alignItems:'center',
    backgroundColor:colors.gray,
    flexDirection:'row',
    width: wp('50%'), 
     height: wp('15%'),
     justifyContent:"center",
     borderRightWidth:2,
     borderColor:colors.danger,
  },

  productIngridient:{
    marginHorizontal:15,
    marginLeft:20,
    textTransform:'capitalize',
  },

  productDiscription:{
    //width:50,
    marginHorizontal:15,
    marginLeft:20,
  },

  about_product:{
    width: wp('100%'),
   },

  aboutProduct:{
    fontSize:17,
    color:colors.black,
    marginTop:15,
    marginVertical:5,
    marginHorizontal:20,
  },

  returnContainer:{
      
  },

  returnColumn:{
    width: wp('30%'), 
     height: wp('10%'),
     justifyContent:"center",
     borderRightWidth:2,
     borderColor:colors.danger,
  },

  returnPolicy:{
    textAlign:'center',
    fontSize:12,
    height:30,
  },

  cate_title:{
    marginTop:-10,
  },

  bakery_title:{
    fontSize:19,
    color:colors.black,
    fontWeight:"500",
 },
 lineStyle:{
  borderColor:colors.danger,
  borderWidth:1,
},

  mrp:{
    marginLeft:5,
    padding:5,
    textDecorationLine: 'line-through', textDecorationStyle: 'solid'
  },

  priceOff:{
    color:colors.black,
    padding:5,
    marginLeft:5,
    borderRadius:5,
    backgroundColor:"pink",
  },

  product_detail_cost:{
    marginVertical:5,
  },

  top_title:{
    marginTop:20,
    fontSize:19,
    color:colors.black,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    
  },
    
  product_details_img:{
    width: wp('80%'),
    height: wp('40%'),
    marginVertical:0, 
    },
   
    todoist_container:{
        marginVertical:10,
        marginHorizontal:10,
        paddingVertical:30,  
        paddingHorizontal:20,
        backgroundColor: "#ffffffd9",
        borderRadius: 5,
        overflow:"hidden",
        shadowColor: '#000',
      },
    listArrayTitle:{
      color: 'black',
      fontWeight: 'normal',
      fontSize: 15,
      marginBottom:10,
    },
  
    listArrayImage:{
      width: wp('50%'),
      height: wp('50%'),
    },
  
    toDoListScroll: {
      marginTop:30,
  },
  
  myList: {
    marginLeft: 20,
  },
  categoryTitle:{
    color: 'black',
    fontWeight: 'normal',
    fontSize: 15,
    marginTop:20,
  },
  marketcontent: {
    marginVertical: 10,
    marginTop: 30,
  },
  });


export default Product_Details
