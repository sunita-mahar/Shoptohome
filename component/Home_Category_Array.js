
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import color from '../../config/color';
import Home_Category from './Home_Category';


const baby = [
  {
    title: 'Box chain',
    cost:'₹440.10',
    imageLink:'https://samluxurygifts.in/image/cache/catalog/aanchal-26/043-1200x1200.jpeg',
  },
  {
    title: 'Fairy Nacklace',
    cost:'₹336.60',
    imageLink:'https://samluxurygifts.in/image/cache/catalog/aanchal-26/032-370x370.jpeg',
  }, 
  {
    title: 'Single letter',
    cost:'₹1470.30',
    imageLink:'https://samluxurygifts.in/image/cache/catalog/aanchal-26/047-370x370.jpeg',
  },
  {
    title: 'Ring Necklace',
    cost:'₹1470.30',
    imageLink:'https://samluxurygifts.in/image/cache/catalog/aanchal-26/068-370x370.jpeg',
  },
];


    const Home_Category_Array = ({navigation}) => {
    
     return (
<>
        <Home_Category dataArray={baby}></Home_Category>
        </>
    
       );
       
  };
     




export default Home_Category_Array ;