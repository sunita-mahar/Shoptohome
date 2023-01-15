
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
import Home_Category_Array from './Home_Category_Array';
//import color from '../../config/color';
import ToDoListCall from './ToDoListCall';


const vegitable = [
  
  {
     
    title: 'potato',
    cost:'₹336.60',
    imageLink:'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6',
    //category:'Vegetable',
  }, 
 
]; 

    const Category_Array = ({navigation}) => {
    
     return (
        <>
        <ToDoListCall veg={vegitable}></ToDoListCall>
        </>
      );
       
  };
     




export default Category_Array ;