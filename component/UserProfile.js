import React from "react";
import { ImageBackground, Image, StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { colors } from "../constant/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const UserProfile = ({ navigation }) => {


  return (


    <View style={styles.main_container}>

      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', }}>
          <ImageBackground source={require('../assets/images/user_bg.jpg')} resizeMode="cover" style={styles.bg_image}>

            <View style={{ width: wp('15%'), height: wp('30%'), marginBottom: 120, }} >
              <Image source={require('../assets/images/user.png')} style={styles.userProfile_img} />
            </View>
            <View style={{ width: wp('50%'), height: wp('15%'), marginBottom: 110, }}>
              <Text style={styles.userProfile_container_text}>Sunita Mahar</Text>
              <Text style={{ color: "white", marginLeft: 10, }}>abc@gmail.com</Text>
            </View>
            <View style={{ marginBottom: 100, marginLeft: 80, }}>
              <AntDesign name='edit' color={'white'} size={35} />
            </View>
          </ImageBackground>
        </View>

        <View style={styles.fav_container}>
          <View style={{ width: wp('33%'), height: wp('20%'), justifyContent: "center", borderRightWidth: 2, borderColor: "white", }}  >
            <Text style={styles.fav_tex}>10</Text>
            <Text style={styles.fav_tex}>Favorite</Text>
            <View style={{ alignItems: "center", }}>
              <Ionicons name='heart-sharp' color={'white'} size={25} />
            </View>
          </View>
          <View style={{ width: wp('33%'), height: wp('20%'), justifyContent: "center", borderRightWidth: 2, borderColor: "white", }} >
            <Text style={styles.fav_tex}>5</Text>
            <Text style={styles.fav_tex}>Wishlist</Text>
            <View style={{ alignItems: "center", }}>
              <Ionicons name='star-sharp' color={'white'} size={25} />
            </View>
          </View>
          <View style={{ width: wp('33%'), height: wp('20%'), justifyContent: "center", }} >
            <Text style={styles.fav_tex}>15</Text>
            <Text style={styles.fav_tex}>Coupons</Text>
            <View style={{ alignItems: "center", }}>
              <Ionicons name='pricetags-sharp' color={'white'} size={25} />
            </View>
          </View>
        </View>


        <View style={styles.myOrder_container} >
          <View><Text style={{ fontSize: 15, color: "black", marginLeft: 15, marginTop: 15, }}>My Order</Text></View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center", }}>
            <View style={{ width: wp('20%'), height: wp('15%'), borderColor: "gray", borderWidth: 0.5, borderRadius: 5, }} >
              <View style={{ alignItems: "center", marginTop: 10, }}>
                <Ionicons name='ios-file-tray-full-outline' color={'coral'} size={25} />
              </View>
              <Text style={styles.order_tex}>Pending</Text>
            </View>
            <View style={{ width: wp('20%'), height: wp('15%'), borderColor: "gray", borderWidth: 0.5, borderRadius: 5, }} >
              <View style={{ alignItems: "center", marginTop: 10, }}>
                <Ionicons name='sync-circle-outline' color={'coral'} size={25} />
              </View>
              <Text style={styles.order_tex}>Processing</Text>
            </View>
            <View style={{ width: wp('20%'), height: wp('15%'), borderColor: "gray", borderWidth: 0.5, borderRadius: 5, }} >
              <View style={{ alignItems: "center", marginTop: 10, }}>
                <Ionicons name='md-car-outline' color={'coral'} size={25} />
              </View>
              <Text style={styles.order_tex}>Shipped</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("orderHistory")}>
              <View style={{ width: wp('20%'), height: wp('15%'), borderColor: "gray", borderWidth: 0.5, borderRadius: 5, }} >
                <View style={{ alignItems: "center", marginTop: 5, }}>
                  {/* <Ionicons name='eye-outline' color={'coral'} size={25} /> */}
                  <Fontisto name='shopping-bag-1' color={'coral'} size={20} style={styles.cupcake_left_icon}/>
                </View>
                <Text style={styles.order_tex}>My Orders</Text>
              </View>
            </TouchableOpacity>



          </View>
        </View>


        <View><Text style={{ marginLeft: 20, color: "black", fontSize: 15, }}>Our Services</Text></View>
        <View style={styles.service_container} >
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: "center", }}>

            <View style={{ width: wp('80%'), height: wp('10%'), flexDirection: "row", }} >
              <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15, marginHorizontal: 10, }}>
                <Ionicons name='md-globe-sharp' color={'coral'} size={25} />
              </View>
              <Text style={styles.order_tex}>Browsing History</Text>
              {/* <View style={{alignItems:"center", justifyContent:"center", marginLeft:50, }}>
           <Ionicons name='caret-forward-outline' color={'coral'} size={20}/>
          </View> */}
            </View>
            <View style={{ width: wp('80%'), height: wp('10%'), flexDirection: "row", }} >
              <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15, marginHorizontal: 10 }}>
                <Ionicons name='map' color={'coral'} size={25} />
              </View>
              <Text style={styles.order_tex}>Address Book</Text>
            </View>
            <View style={{ width: wp('80%'), height: wp('10%'), flexDirection: "row", }} >
              <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15, marginHorizontal: 10 }}>
                <Ionicons name='md-notifications' color={'coral'} size={25} />
              </View>
              <Text style={styles.order_tex}>Notification</Text>
            </View>
            <View style={{ width: wp('80%'), height: wp('10%'), flexDirection: "row", }} >
              <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15, marginHorizontal: 10 }}>
                <Ionicons name='md-call' color={'coral'} size={25} />
              </View>
              <Text style={styles.order_tex}>Support</Text>
            </View>
            <View style={{ width: wp('80%'), height: wp('10%'), flexDirection: "row", }} >
              <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15, marginHorizontal: 10 }}>
                <Ionicons name='person-circle-outline' color={'coral'} size={25} />
              </View>
              <Text style={styles.order_tex}>About Us</Text>
            </View>

          </View>
        </View>

      </ScrollView>


    </View>

  )
}

const styles = StyleSheet.create({

  service_container: {
    backgroundColor: "#ffffffd9",
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 6,
    // height:290,
    // width:"90%",
    width: wp('90%'),
    height: wp('60%'),
    overflow: "hidden",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },

  order_tex: {
    fontSize: 12,
    alignSelf: "center",
  },

  myOrder_container: {
    backgroundColor: "#ffffffd9",
    //padding:90,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 6,
    // height:130,
    // width:"90%",
    width: wp('90%'),
    height: wp('30%'),
    //borderTopRightRadius:100,
    overflow: "hidden",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,

  },

  fav_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    position: "absolute",
    top: 180,
  },

  fav_tex: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
  },
  profile_name_container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: wp('100%'),
  },
  profile_name: {
    // width:45,
    // height:80,
    width: wp('90%'),
    height: wp('10%'),
  },

  bg_image: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: "center",
    // height:300,
    width: wp('100%'),
    height: wp('80%'),
    alignItems: "center",
    //justifyContent:"center",

  },

  userProfile_to_container: {
    // backgroundColor: colors.primary,
    //height:180,
    //borderBottomEndRadius:190,
    //borderBottomLeftRadius:190,
    justifyContent: "center",
    //width:"100%",
    //height:80,
  },
  userProfile_container_text: {
    color: 'white',
    // alignSelf:"center",
    fontSize: 22,
    marginLeft: 10,
    // marginBottom:20,
    // position:"absolute",
    // top:50,


  },
  userProfile_img: {
    // alignSelf:'center',
    // fontWeight:"700", 
    // height:80, 
    // width:78,
    // position:"absolute",
    // top:130,
    marginLeft: 10,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },

  userProfile_form: {
    //marginTop:70,
    marginHorizontal: 10,

  },
  user_edit_btn: {
    alignItems: "center",
  },

  userProfile_edit_btn: {
    backgroundColor: "#b544e1",
    textAlign: "center",
    color: "white",
    borderRadius: 60,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 20,
    fontSize: 19,
    width: wp('10%'),
    // width:"70%",
    alignContent: "center",
    alignItems: "center",

  },

  main_container: {
    //marginHorizontal:20,
    //alignItems: 'center',
    // flex: 1,
    //justifyContent: 'center',
    //backgroundColor: "#7fe3a4",
  },

  logSpan: {
    fontWeight: 'bold',
    //color:'black',
  },


  inner_container: {
    //backgroundColor: "#ffffffd9",
    padding: 20,
    borderRadius: 20,
    marginTop: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-end",
    //borderTopRightRadius:100,
    // overflow:"hidden",
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 6,  
    // elevation: 5,
  },

  position: {
    width: 0,
    height: 0,
    borderRadius: 10,
    borderLeftWidth: 30,
    borderRightWidth: 200,
    borderBottomWidth: 150,
    top: -100,
    left: -20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',

  },

  signin: {
    fontSize: 30,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: "700",
    height: 70,
    width: 70,
  },

  input_field: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 3,
    border: null,
  },

  forget: {
    alignItems: 'center',
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },



});



export default UserProfile