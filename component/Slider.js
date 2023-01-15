import React from 'react';
//import {SliderBox} from "react-native-image-slider-box";
import { ImageSlider } from "react-native-image-slider-banner";

import { View, ViewSlider, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

 const Slider =(navigation) =>{
    
//     const slide = [require("../assets/images/banner_1.jpg"),
//     require("../assets/images/banner_2.jpg")
//   ]


    return(
   <View style={styles.slider_container}>
    <ImageSlider 
    //style={{width: 360, height: 270, flex:0, resizeMode: 'contain'}} 
    style={styles.image_slider}
    data={[
        {img: 'https://img.freepik.com/free-psd/banner-online-fashion-sale_23-2148585402.jpg'},
        {img: 'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design-1536x864.jpg'},
        {img: 'https://graphicsfamily.com/wp-content/uploads/edd/2022/09/Food-Menu-Social-Media-Banner-Design-870x489.jpg'}
    ]}
    autoPlay={true}
    timer={2000}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
    caroselImageStyle={{ resizeMode: 'cover', height:175, }}
    indicatorContainerStyle={{padding:-190}}
    />
   </View>  
    )
}

const styles = StyleSheet.create({ 
    
    slider_container:{
       // marginBottom:-50,
        //marginTop:-73,
       // padding:0,
    },
    image_slider:{
        // margin:80,
        // padding:0,
    },
});

export default Slider;