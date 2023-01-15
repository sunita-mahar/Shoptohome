import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { useState, useEffect } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from "../constant/Colors";
import Search from './Search';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Cart = (navigation) => {
  return (
    <ScrollView>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor:"white", backgroundColor:colors.primary_shadow, justifyContent:'center', alignItems:'center', height: wp('12%'),  marginVertical:30, marginHorizontal:20, borderRadius:20, }}>
        <View style={styles.cartColumn } >
         <Text style={styles.aval_blc}>Your Total Saving</Text>
        </View>
        <View style={styles.cartColumn } >
          <Text style={styles.aval_blc_rupee}>₹36</Text>
        </View>
     </View>

     <View style={{flex: 1, flexDirection: 'row', backgroundColor:"white", backgroundColor:colors.white, alignItems:'center', height: wp('12%'), marginHorizontal:20, borderRadius:20, }}>
        <View style={styles.delivery_text_col } >
          <View style={{ marginRight:5,}}>
            <MaterialCommunityIcons name='av-timer' color={colors.danger} size={25}/>
          </View>
         <Text style={styles.delivery_text}>Delivery in 30min</Text>
        </View>
     </View>


      <View style={{flex: 0, flexDirection: 'column', backgroundColor:"white", backgroundColor:colors.white, justifyContent:'center', alignItems:'center', height: wp('12%'),marginVertical:30, marginHorizontal:20, borderRadius:20, }}>
        <View style={{flex:0, flexDirection: 'row', backgroundColor:"white", justifyContent:'center', alignItems:'center',  marginVertical:30, marginHorizontal:20, borderRadius:20, }}>
          <View style={styles.ord_item } >
           <Text style={styles.aval_blc_1}>Add More Item</Text>
          </View>
          <View style={styles.ord_item } >  
           {/* <Text style={{color:colors.black, alignItems:'flex-end', marginLeft:140,}}>₹36</Text> */}
           <MaterialCommunityIcons name='chevron-right'  size={25} style={{alignSelf:'flex-end', justifyContent:'center',}}/>
          </View>
        </View>
      </View>






    <View style={{ backgroundColor:colors.white, height: wp('55%'),  marginHorizontal:20, borderRadius:20,}}>
      <View ><Text style={{color:colors.black, fontSize:17, fontWeight:"700", marginVertical:10, marginLeft:15,}}>Your Order</Text></View>

      <View style={{flex: 0, flexDirection: 'row', marginTop:5,}}>
        <View style={{width: wp('8%'),height: wp('10%'), }}>
          <Fontisto name='shopping-bag-1' color={colors.danger} size={20} style={styles.cupcake_left_icon}/>
        </View>
        <View style={{width: wp('40%'),height: wp('10%'), marginRight:20,}}>
          <Text style={{marginRight:0,}}>Strawberry Cupcake</Text>
        </View>
        <View style={{width: "35%", height: 50, alignItems:'flex-end', marginRight:10,}}>
          <Text style={{width:100, textAlign:'center', backgroundColor:colors.danger,padding:5, borderRadius:5, color:colors.white,}}>- 7 +</Text>
        </View>
      </View>

      <View style={{flex: 0, flexDirection: 'row', marginTop:-25, marginLeft:15,}}>
        <View style={{width: wp('50%'),height: wp('12%'),}}>
          <Text style={{marginLeft:20,}}>₹36</Text>
        </View>
        <View style={{width: wp('35%'),height: wp('12%'), alignItems:'flex-end',}}>
          <Text style={{ marginRight:20, marginTop:5,}}>₹36</Text>
        </View>
      </View>

      <View style={{flex: 0, flexDirection: 'row', marginTop:-25, marginLeft:15,}}>
        <View style={{width: wp('35%'),height: wp('12%'),}}>
          <Text style={{marginLeft:20,}}>edit</Text>
        </View>
        {/* <View style={{width: 50, height: 50, }}>
          <MaterialCommunityIcons name='av-timer' color={colors.danger} size={25} style={styles.edit_arrow}/>
        </View> */}
      </View>

      <View style={{flex: 0, flexDirection: 'row', marginTop:-25, marginLeft:15,}}>
        <View style={{width: wp('35%'),height: wp('5%'),}}>
          <Text style={{marginLeft:20,}}>Add More Item</Text>
        </View>
        {/* <View style={{width: 50, height: 50, }}>
          <MaterialCommunityIcons name='av-timer' color={colors.danger} size={25} style={styles.edit_arrow}/>
        </View> */}
      </View>

      <View style={{flex: 0, flexDirection: 'row', marginLeft:15,}}>
        <View style={{width: wp('35%'), height: wp('15%'),}}>
          <Text style={{marginLeft:20,}}>Add Cooking Instructions</Text>
        </View>
        {/* <View style={{width: 50, height: 50, }}>
          <MaterialCommunityIcons name='av-timer' color={colors.danger} size={25} style={styles.edit_arrow}/>
        </View> */}
      </View>

    </View>

    

     <View style={{flex: 1, flexDirection: 'row', paddingTop:10, marginTop:30, backgroundColor:colors.primary_shadow,   alignItems:'center', width: wp('90%'),height: wp('15%'),  marginHorizontal:20, borderRadius:20, }}>
        <View style={{width: wp('10%'),height: wp('10%'),}} >
           <MaterialIcons name='card-giftcard' color={colors.white} size={25} style={{marginLeft:10, }}/>
        </View>
          
          <View style={{width: wp('20%'),height: wp('8%'), }}>
         <Text style={styles.useCoupon_text}>Use Coupon</Text>
         </View>
         <View style={{width: wp('60%'),height: wp('10%'),}} >
         <MaterialCommunityIcons name='chevron-right' color={colors.white} size={25} style={{alignSelf:'flex-end',}}/>
          </View>
          
     </View>





     <View style={{ backgroundColor:colors.white, width: wp('90%'),height: wp('60%'), marginHorizontal:20, borderRadius:20, marginTop:30}}>
      <View ><Text style={{color:colors.black, fontSize:17, fontWeight:"700", marginVertical:10, marginLeft:15,}}>Bill Summary</Text></View>

      <View style={{flex: 0, flexDirection: 'row', marginTop:5,}}>
        {/* <View style={{width: 30, height: 50, }}>
          <MaterialCommunityIcons name='cupcake' color={colors.white} size={25} style={styles.cupcake_left_icon}/>
        </View> */}
        <View style={{width: wp('50%'),height: wp('12%'),}}>
          <Text style={{marginLeft:30,}}>Item Total</Text>
        </View>
        <View style={{width: wp('35%'),height: wp('12%'), alignItems:'flex-end',}}>
          <Text >₹200.00</Text>
        </View>
      </View>

      <View style={{flex: 0, flexDirection: 'row', marginTop:-25, marginLeft:8,}}>
        <View style={{width: wp('50%'),height: wp('12%'),}}>
          <Text style={{marginLeft:20,}}>Delivery Charge</Text>
        </View>
        <View style={{width: wp('38%'),height: wp('12%'), alignItems:'flex-end',}}>
          <Text style={{ marginRight:20, marginTop:5,}}>₹15</Text>
        </View>
      </View>

      <View style={{flex: 0, flexDirection: 'row', marginTop:-25, marginLeft:8,}}>
        <View style={{width: wp('50%'),height: wp('12%'),}}>
          <Text style={{marginLeft:20,}}>Govt. taxes</Text>
        </View>
        <View style={{width: wp('38%'),height: wp('12%'), alignItems:'flex-end',}}>
          <Text style={{ marginRight:20, marginTop:5,}}>₹28.35</Text>
        </View>
      </View>
      <View style={{flex: 0, flexDirection: 'row', marginTop:-25, marginLeft:8,}}>
        <View style={{width: wp('50%'),height: wp('12%'),}}>
          <Text style={{marginLeft:20,}}>Feeding India Donation</Text>
        </View>
        <View style={{width: wp('38%'),height: wp('12%'), alignItems:'flex-end',}}>
          <Text style={{ marginRight:20, marginTop:5,}}>₹2</Text>
        </View>
      </View>

      <View style={{flex: 0, flexDirection: 'row', marginLeft:8,}}>
        <View style={{width: wp('50%'),height: wp('12%'),}}>
          <Text style={{marginLeft:20, color:colors.black, fontWeight:"600",}}>Grand Total</Text>
        </View>
        <View style={{width: wp('38%'),height: wp('12%'), alignItems:'flex-end',}}>
          <Text style={{ marginRight:20, marginTop:5, color:colors.black, fontWeight:"600",}}>₹260.00</Text>
        </View>
      </View>

  
    </View>



    <View style={{flex: 0, flexDirection: 'column', backgroundColor:"white", backgroundColor:colors.white,  width: wp('90%'),height: wp('20%'), marginVertical:30, marginHorizontal:20, borderRadius:20, }}>
    <View ><Text style={{color:colors.black, fontSize:17, fontWeight:"700", marginLeft:20, marginTop:10, }}>Your Details</Text></View>

        <View style={{flex:0, flexDirection: 'row',  backgroundColor:"white", backgroundColor:colors.primary_shadow, justifyContent:'center', alignItems:'center', height:0, marginVertical:30, marginHorizontal:0, borderRadius:20, }}>
          <View style={styles.ord_add } >
           <Text style={styles.add_text}>Sunita Mahar,9575535487</Text>
          </View>
          <View style={styles.ord_add_arrow } >  
           <MaterialCommunityIcons name='chevron-right'  size={25} style={{alignSelf:'flex-end', justifyContent:'center', marginRight:50,}}/>
          </View>
        </View>
      </View>

      


    </ScrollView>
  )
}

const styles = StyleSheet.create({


  add_text:{
    textAlign:'center',
    fontSize:13,
    //height:30,
    //justifyContent:'flex-start',
    color:colors.black,
  },

  ord_add:{
    //flexDirection:'column',
   width: wp('50%'),height: wp('15%'),
    marginLeft:50,
    
 },

 ord_add_arrow:{
  //flexDirection:'column',
  width: wp('40%'),height: wp('15%'),
  marginLeft:50,
 
  
},

  useCoupon_text:{
    color:colors.white,
    fontSize:13,
},

  coupon_col:{
    //flexDirection:'row',
    width: wp('50%'),height: wp('15%'),
    justifyContent:'center',
    alignSelf:'center',
},

  use_coupon:{
    width: wp('50%'),height: wp('15%'),
    color:colors.white,
    // justifyContent:'center',
    // alignContent:'center',
    // alignItems:'center',
  },

  Coupon_icon:{
    width: wp('50%'),
    color:colors.black,
  },

  edit_arrow:{

  },

  cupcake_left_icon:{
   marginLeft:5,
  },


  aval_blc_1:{
    textAlign:'center',
    fontSize:13,
    //height:30,
    justifyContent:'flex-start',
    color:colors.black,
  },

  aval_blc_2:{
     textAlign:'center',
    fontSize:13,
    color:colors.white,
    //height:30,
  },

  ord_item:{
    //flexDirection:'column',
    width: wp('50%'),height: wp('15%'),
    //alignContent:'center',
    //alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },

  lineStyle:{
    borderColor:"#bdb9b4bf",
    borderWidth:1,
    width:"90%",
  },

  aval_ord:{
    fontSize:13,
    color:colors.black,
  },

  cartOrderColumn:{
    //flexDirection:'column',
    width: wp('50%'),
    //height: 50,
    //alignContent:'center',
    //alignItems:'center',
    //justifyContent:'center',
    //alignSelf:'center',
 },
     
    delivery_text_col:{
        flexDirection:'row',
        width: wp('40%'),
        justifyContent:'center',
        alignSelf:'center',
    },
      
    delivery_text:{
        color:colors.black,
        fontSize:13,
    },

    cartColumn:{
        //flexDirection:'column',
        width: wp('55%'),height: wp('15%'),
        //alignContent:'center',
        //alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
     },
   
     aval_blc:{
       textAlign:'center',
       fontSize:13,
       //height:30,
       justifyContent:'flex-start',
       color:colors.white,
     },

     aval_blc_rupee:{
        textAlign:'center',
       fontSize:13,
       color:colors.white,
       marginLeft:70,
       //height:30,
     },

    myOrder_container:{
        backgroundColor: "#ffffffd9",
        //padding:90,
        marginVertical:20,
        marginHorizontal:20,
        borderRadius:6,
        width: wp('50%'),height: wp('15%'),
        //borderTopRightRadius:100,
        overflow:"hidden",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 6,  
        elevation: 3,
        
       },
})

export default Cart

