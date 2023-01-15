
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




export const product = [
  {
    index:"1",
    product_top_title:"Fresh Strawberry Cupcakes - Sour Cream, Powdered Sugar, Strawberries, Milk, Eggs",
    mrp:"Rs 450",
    price_off:"20% OFF",
    name:"Cup Cake ",
    title: 'Cakes & Dairy',
    cost:'₹360.0',
    imageLink:'https://static.onecms.io/wp-content/uploads/sites/19/2018/02/13/pastries-hero-2000.jpg',
    category:'Bakery',
  },
  {
      index:"2",
    name:"Lemon Cake",
    title: 'Cakes & Dairy',
    cost:'₹336.60',
    imageLink:'https://www.bakemag.com/ext/resources/images/2021/1/Dawn_Cake.jpg?t=1611608963&width=1080',
    category:'Bakery',
  }, 
  {
    index:"3",
    name:" Brownies",
    title: 'Cakes & Dairy',
    cost:'₹470.30',
    imageLink:'https://cdn.shopify.com/s/files/1/0521/3929/4884/products/WalnutBrownie1.jpg?v=1620806144',
    category:'Bakery',
  },
  {
      index:"4",
    name:"Pastries & Desserts",
    title: 'Cakes & Dairy',
    cost:'₹470.30',
    imageLink:'https://miro.medium.com/max/1400/0*ZJ1swvqibbBx2JDf.jpg',
    category:'Bakery',
  },
  {
      index:"5",
    name:"French Pastry",
    title: 'Cakes & Dairy',
    cost:'₹689.90',
    imageLink:'https://www.willflyforfood.net/wp-content/uploads/2021/12/french-pastries-pain-au-chocolate.jpg',
    category:'Bakery',
  },
  {
      index:"6",
    name:"Cup Cakes",
    title: 'Cakes & Dairy',
    cost:'₹670.30',
    imageLink:'https://www.bakemag.com/ext/resources/images/2021/2/PattysCakes_CupcakeFlavors.jpg?t=1612799943&width=1080',
    category:'Bakery',
  },
  {   
      index:"7", 
      name:"Chocolate Cake",
      title: 'Cakes & Dairy',
      cost:'₹440.10',
      imageLink:'https://www.fnp.com/images/pr/l/v20221221172007/decorated-chocolate-truffle-cake-half-kg_1.jpg',
      category:'Bakery',
    },
    {
      index:"8",
      name:"Strawberry Cake",
      title: 'Cakes & Dairy',
      cost:'₹336.60',
      imageLink:'https://media.bakingo.com/sq-vanilla-strawberry-cake-with-red-carnation-on-top-rosecake2563stra-A_0.jpg',
      category:'Bakery',
    }, 
    {
      index:"9",
      name:"Sweet Baked Bread",
      title: 'Cakes & Dairy',
      cost:'₹470.30',
      imageLink:'https://www.grab.com/ph/wp-content/uploads/sites/12/2018/12/bread-delivery-manila-700x700.jpg',
      category:'Bakery',
    },


    {
    index:"1",
    title: 'potato',
    cost:'₹336.60',
    imageLink:'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6',
    category:'Vegetable',
  },
  {
    index:"2",
    title: 'potato',
    cost:'₹336.60',
    imageLink:'https://5.imimg.com/data5/YK/ER/GLADMIN-39923086/tomato-vegitable-500x500.png',
    category:'Vegetable',
  },

  {
    index:"1",
    title: 'Cleaning',
    cost:'₹336.60',
    imageLink:'https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg?rev=2bd4d26e45c54499acab7a4007dbb210',
    category:'cleaning',
  },
  {
    index:"2",
    title: 'Cleaning',
    cost:'₹336.60',
    imageLink:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-cleaning-royalty-free-image-1619639543.?crop=1xw:0.94639xh;center,top&resize=1200:*',
    category:'cleaning',
  },
    
  
];



 const vegitable = [
  
  {
      index:"1",
    name:"veg",
    title: 'potato',
    cost:'₹336.60',
    imageLink:'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6',
    category:'Vegetable',
  }, 
 
]; 


const ProductData = ({navigation}) => {
    
  return (
<>
     </>
 
    );
    
};
  




export default ProductData ;