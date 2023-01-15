
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
import Top_Product from './Top_Product';


const baby = [
  {
    //name:" Top Pics For You",
    title: 'Foody Mix',
    cost:'₹440.10',
    imageLink:'https://www.helpguide.org/wp-content/uploads/salad-in-takeout-box-fork-768.jpg',
  },
  {
    title: 'Burger Package',
    cost:'₹336.60',
    imageLink:'https://media-cdn.tripadvisor.com/media/photo-s/17/ad/2f/16/double-burger.jpg'
  }, 
  {
    title: 'Creamy Tacoo',
    cost:'₹1470.30',
    imageLink:'https://www.qsrmagazine.com/sites/default/files/styles/slideshow_image/public/news-image/taco-bell-unveils-next-big-innovation-toasted-cheddar-chalupa-nationwide.jpg?itok=QNVaLQCg',
  },
  {
    title: 'Tamato Pizza',
    cost:'₹1470.30',
    imageLink:'https://www.eatthis.com/wp-content/uploads/sites/4/2020/11/mellow-mushroom-pizza.jpg',
  },
];



    const Top_Product_Array = ({navigation}) => {
    
     return (
        <>
        <Top_Product dataArray={baby}></Top_Product>
        </>
    
       );
       
  };
     




export default Top_Product_Array ;