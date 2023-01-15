
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
import ToDoListCall from './ToDoListCall';


const baby = [
  {
    name:" Other parts of the store",
    title: 'Matte Lipstick',
    cost:'₹440.10',
    imageLink:'https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-71335764/71335764.jpg',
  },
  {
    title: 'Bobbi Brown',
    cost:'₹336.60',
    imageLink:'https://media.allure.com/photos/5c1160b4177eb32c66a6e55d/16:9/w_2580,c_limit/allure-product-launches-social-lede.jpg'
  }, 
  {
    title: 'Face Serum',
    cost:'₹1470.30',
    imageLink:'https://media.istockphoto.com/id/1300459022/photo/natural-organic-spa-cosmetic-products-set-with-eucalyptus-leaves-top-view-herbal-skincare.jpg?b=1&s=170667a&w=0&k=20&c=6_z9QmxfFDMvwLdM41BUHswrHLOFkLtIkewZ9aBkFZk=',
  },
  {
    title: 'Face Herble Helthline',
    cost:'₹1470.30',
    imageLink:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/03/975651-The-20-Best-Calming-Beauty-Products-for-2021-1296x728-Header-fdbb44.jpg?w=1155&h=1528',
  },
];
const decoration = [
  
  {
    name:"Home Decore",
    title: 'Buddha Statue',
    cost:'₹600.80',
    imageLink:'https://hometown.gumlet.io/media/cms/icons/Kitchenware/figurines.jpg?w=200&dpr=2.6',
  },
  {
    title: 'Design Candle',
    cost:'₹870.40',
    imageLink:'https://diybaazar.com/publicuploads/seller/products/plrk-metal-iron-ganesha-t-light-multicolour-stone-candle-holder-home-decorative-itemshome-decor-items-for-living-roompooja-room-diwali-gift-items-2551-3502-1_diybaazar63347b3fb83a7.jpg',
  },
  {
    title: 'Flower Basket',
    cost:'₹550.50',
    imageLink:'https://m.media-amazon.com/images/I/71g3r9TtF8L._SY355_.jpg',
  },
  {
    title: 'Wall Clock',
    cost:'₹600.80',
    imageLink:'https://ae01.alicdn.com/kf/S59566f1623634d7db441b902c7312b79o/Living-room-decoration-wall-clock-modern-design-Home-decor-3D-wall-clock-Wall-stickers-Aesthetic-room.jpg_Q90.jpg_.webp',
  },
];


    const ToDoList = ({navigation}) => {
    
     return (
<>
        <ToDoListCall dataArray={baby}></ToDoListCall>
        <ToDoListCall dataArray={decoration}></ToDoListCall>
        </>
    
       );
       
  };
     




export default ToDoList ;