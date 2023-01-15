 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';

import React, { createContext, useEffect, useState } from 'react';
import type from 'react';
//import {Login} from './component/Login';
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
// import Carousel from 'react-native-snap-carousel';

//import AntDesign from 'react-native-vector-icons/AntDesign'
import { Icon } from "react-native-vector-icons";

//import { createDrawerNavigator } from '@react-navigation/drawer';
//import 'react-native-gesture-handler';
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
import SplashScreen from 'react-native-splash-screen'
// import SnapSlider from './component/SnapSlider';
import SearchList from './component/SearchList';
// import { useEffect } from 'react';



 
// export const AuthContext = createContext({});

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const store = createStore(() => [], {}, applyMiddleware());



const Stack = createNativeStackNavigator();
const App = () => {

  useEffect ( ()=>{
    SplashScreen.hide();
  },[])
 
  return (
   <>

<Provider store={store}>

{console.log(store)}

{/* <AuthContext.Provider value={{email,password}}> */}

<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="login">

    {/* Login Screen */}
    <Stack.Screen name="login" component={Login} />

    {/* <Stack.Screen name="login"> <Login setEmail={setEmail} setPassword={setPassword} /> </Stack.Screen> */}

    {/* ForgotPassword Screen */}
    <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    
    {/* Home Screen */}
    <Stack.Screen name="home" component={Home} />

    {/* Product Screen */}
    <Stack.Screen name="product" component={Product} />

    {/* Product_Details Screen */}
    <Stack.Screen name="productdetails" component={Product_Details} />

     {/* search Screen */}
     <Stack.Screen name="search" component={Search} />

     {/* searchList Screen */}
     <Stack.Screen name="searchList" component={SearchList} />

    {/* Home_Category_Array Screen */}
    <Stack.Screen name="homecategoryarray" component={Home_Category_Array} />

    {/* Category Screen */}
    <Stack.Screen name="category" component={Category} />

    {/* VendorList Screen */}
    <Stack.Screen name="vendorList" component={VendorList} />

    {/* UserProfile Screen */}
    <Stack.Screen name="userProfile" component={UserProfile} />

    {/* OrderHistory Screen */}
    <Stack.Screen name="orderHistory" component={OrderHistory} />

    {/* Order_Details Screen */}
    <Stack.Screen name="orderDetails" component={Order_Details} />

    {/* ToDoList Screen */}
    <Stack.Screen name="toDoList" component={ToDoList} />

    {/* ProductData Screen */}
    <Stack.Screen name="productData" component={ProductData} />

    {/* Category_Array Screen */}
    <Stack.Screen name="categoryarray" component={Category_Array} />

    {/* Cart Screen */}
    <Stack.Screen name="cart" component={Cart} />

    {/* Slider Screen */}
    <Stack.Screen name="slider" component={Slider} />

    {/* SnapSlider Screen */}
    {/* <Stack.Screen name="snapSlider" component={SnapSlider} /> */}

    {/* Colors Screen */}
    {/* <Stack.Screen name="color" component={Colors} /> */}


    </Stack.Navigator>
   </NavigationContainer> 

   {/* </AuthContext.Provider> */}

   </Provider>
   
   </>
  );
};



const styles = StyleSheet.create({

});

export default App;
