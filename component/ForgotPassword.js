import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput, ImageBackground, } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const sendInstructionsHandle = () => {
  //TODO: handle user verfication and mail password reset link
};

const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/forgot_bg_img.jpeg')} resizeMode="cover" style={styles.bg_image}>
      
    <View style={styles.container}>
      <View style={styles.TopBarContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-circle-outline" size={30} color={'coral'} />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.screenNameContainer}>
        <View>
          <Text style={styles.screenNameText}>Reset Password</Text>
        </View>
        <View>
          <Text style={styles.screenNameParagraph}>
            Enter the email associated with your account and we'll send an email
            with instruction to reset the password.
          </Text>
        </View>
      </View> */}
      <View style={styles.ForgetPasswordParagraph}>
      <Ionicons name='lock-closed' color={'coral'} size={65} backgroundColor={'red'}/>
         <Text style={styles.forgot_Title_text}>Forgot Your Password?</Text>
         <Text style={styles.screenNameParagraph}>Enter your email below to reset your password</Text>
      </View>
      <View style={styles.formContainer}>
        {/* <Text style={{ fontSize:17, marginTop:10, }}>Enter Your Mail</Text> */}
        <TextInput style={styles.input_field} placeholder="Email" secureTextEntery={true} />
        <TouchableOpacity onPress={() => navigation.navigate("login")} style={styles.login_btn}>
            <Text style={styles.login_tx}>Submit</Text>
        </TouchableOpacity>
      </View>
      
       <View style={styles.overlay} />
    </View>
    </ImageBackground>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
    // overlay: {
    //     ...StyleSheet.absoluteFillObject,
    //     backgroundColor: 'rgba(0,0,0,0.5)'
    //   },

    bg_image: {
        flex: 1,
        justifyContent: "center",
        //height: wp('100%'),
        width: wp('100%'),
       },
  container: {
    flexDirecion: "row",
    //backgroundColor: 'white',
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  TopBarContainer: {
    width: wp('100%'),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  screenNameContainer: {
    marginTop: 10,
    width: wp('100%'),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  screenNameText: {
    fontSize: 30,
    fontWeight: "800",
    color: 'pink',
  },
  screenNameParagraph: {
    marginTop: 5,
    fontSize: 15,
  },
  ForgetPasswordParagraph:{
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  forgot_Title_text:{
    fontSize: 30,
    fontWeight: "800",
    color: 'coral',
  },
  formContainer: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    width: "100%",
    flexDirecion: "row",
    top:40,
  },
  input_field:{
    borderWidth:3, 
    borderColor:"#e35827", 
    paddingHorizontal:5, 
    paddingVertical:3, 
    borderRadius:1, 
    fontFamily:"regular",
     fontSize:16,
     marginTop:18,
     borderRadius:5,
     width: wp('80%'),
     height: wp('10%'),
},

login_btn:{
    borderWidth:3, 
    borderColor:"#e35827", 
    backgroundColor:"#e35827", 
    textAlign:"center",
    alignContent:"center",
    borderRadius:6,
    marginTop:35,
    borderRadius:5,
    width: wp('80%'),
    height: wp('10%'),
},
login_tx: {
    textAlign:"center",
    color:"white",
    fontSize:25,
    fontWeight:"600",
  },

});