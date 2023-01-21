import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



export const Login = () => {


  return (
    <>


      <ImageBackground source={require('../assets/images/banner_bg_img.jpg')} style={styles.bg_image}>

        <View style={styles.main_container}>

          <View style={styles.welconeContainer}>
            <View>
              <Text style={styles.welcomeText}>Welcome to EasyBuy</Text>
              <Text style={styles.welcomeParagraph}>
                make your ecommerce easy
              </Text>
            </View>
            <View>
              <Ionicons name='ios-logo-octocat' color={'#e35827'} size={70} backgroundColor={'red'} />
            </View>
          </View>

          <View style={styles.inner_container} >

            <View>
              <Text style={styles.signin} >Sign In</Text>
            </View>

            <View >
              <Text style={{ fontSize: 15, }}>Enter Your Email</Text>
              {/* <TextInput style={styles.input_field} onChangeText={(ele)=>{console.log(ele)}} /> */}
              <TextInput
                style={styles.input_field}
                placeholder="Enter Email"
                // onChangeText={newText => {  setEmail(newText); console.log(newText); }}
                onChangeText={(ele) => { console.log(ele) }}
              // defaultValue={email}
              />


              <Text style={{ fontSize: 15, marginTop: 10, }}>Enter Your Password</Text>
              {/* <TextInput style={styles.input_field} secureTextEntery={true} /> */}
              <TextInput
                style={styles.input_field}
                placeholder="Password"
                secureTextEntery={true}
              // onChangeText={(value) => setPassword(value)}
              // defaultValue={password}
              />

              <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
                <Text style={styles.forget}>Forgot Password</Text>
              </TouchableOpacity>



              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.login_tx}> Login</Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </ImageBackground>


    </>



  )
}

const styles = StyleSheet.create({

  welconeContainer: {
    width: wp('100%'),
    height: wp('50%'),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 42,
    fontWeight: "bold",
  },
  welcomeParagraph: {
    fontSize: 15,
    fontWeight: "500",
  },

  login_tx: {
    backgroundColor: "#e35827",
    textAlign: "center",
    color: "white",
    borderRadius: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },

  main_container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  bg_image: {
    flex: 1,
    //justifyContent: "center",
    resizeMode: "cover",
    //height:300,
    //width: wp('100%'),
    //width:"100%",
    height: wp('100%'),
  },

  inner_container: {
    width: wp('70%'),
    backgroundColor: "#ffffffd9",
    padding: 50,
    borderRadius: 20,
    // borderWidth: 1,
    //  borderColor: '#fff',
    //   shadowOffset: {width: 0, height: 0},  
    //   shadowColor: 'black',  
    //   shadowOpacity: 0.9,  
    //   shadowRadius: 10,
    borderTopRightRadius: 100,
    overflow: "hidden",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,

  },

  position: {
    //position:"absolute",
    //transform: [{ rotate: "90deg" }],
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
    //position:"relative",
    //zIndex:2,
    alignItems: 'center',
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "700",
  },

  input_field: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 16,
    marginTop: 5,
    borderRadius: 3,
  },

  forget: {
    alignItems: 'center',
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
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

  menuStyle: {

  },

  lineStyle: {
    marginBottom: 20,
    borderColor: "#ffffffd9",
    borderWidth: 0.5,

  },



});



export default Login