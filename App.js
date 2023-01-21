 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type from 'react';
import Home from './component/Home';
import ToDoList from './component/ToDoList';
import Slider from './component/Slider';
import ForgotPassword from './component/ForgotPassword';
import BottomMenu from './component/BottomMenu';
import UserProfile from './component/UserProfile';
import Category from './component/Category';
import Home_Category_Array from './component/Home_Category_Array'
import Top_Product_Array from './component/Top_Product_Array';
import { colors } from "../constant/Colors";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {SliderBox} from "react-native-image-slider-box";
import { ImageSlider } from "react-native-image-slider-banner";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './component/Login';
import Product from './component/Product';
import Product_Details from './component/Product_Details';
import Search from './component/Search';
import ProductData from './component/ProductData';
import Category_Array from './component/Category_Array';
import Cart from './component/Cart';

 
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import VendorList from './component/Vendor';
import OrderHistory from './component/OrderHistory';
import Order_Details from './component/Order_Details';
// import SplashScreen from 'react-native-splash-screen'
import SearchList from './component/SearchList';


import Router from './routes/Router';
import AuthProvider from './routes/AuthStack';
import {AuthContext} from './context/Auth'


const Stack = createNativeStackNavigator();
const {loadLocalStorage} = useContext(AuthContext);
const App = () => {

  // useEffect ( ()=>{
  //   SplashScreen.hide();
  // },[])


  useEffect( ()=>{
    loadLocalStorage();
  }

  )
 
  return (
   <>

    <AuthProvider>
      <Router />
    </AuthProvider>
   
   </>
  );
};



const styles = StyleSheet.create({

});

export default App;
