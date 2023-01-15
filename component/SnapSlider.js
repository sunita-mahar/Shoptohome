// import React, {useRef, useState, useEffect} from 'react';
// import { StatusBar } from 'react-native';
// import {ParallaxImage} from 'react-native-snap-carousel';
// import Carousel from 'react-native-snap-carousel';
// import {
//   View,
//   Text,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';




// const ENTRIES1 = [
//   {
//     title: 'Beautiful and dramatic Antelope Canyon',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration: 'https://i.imgur.com/UYiroysl.jpg',
//   },
//   {
//     title: 'Earlier this morning, NYC',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
//   },
//   {
//     title: 'White Pocket Sunset',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//     illustration: 'https://i.imgur.com/MABUbpDl.jpg',
//   },
//   {
//     title: 'Acrocorinth, Greece',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
//   },
//   {
//     title: 'The lone tree, majestic landscape of New Zealand',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
//   },
// ];


// const {width: screenWidth} = Dimensions.get('window');


// const SnapSlider = props => {<Text style={styles.title} numberOfLines={2}>
//           {item.title}
//         </Text>


// // const {width: screenWidth} = Dimensions.get('window');
// const [entries, setEntries] = useState([]);
//   const carouselRef = useRef(null);

// //   const goForward = () => {
// //     carouselRef.current.snapToNext();
// //   };

//   useEffect(() => {
//     setEntries(ENTRIES1);
//   }, []);

//   const renderItem = ({item, index}, parallaxProps) => {
//     return (
//       <View style={styles.item}>
//         <ParallaxImage
//           source={{uri: item.illustration}}
//           containerStyle={styles.imageContainer}
//           style={styles.image}
//           parallaxFactor={0.4}
//           {...parallaxProps}
//         />
//         {/*  */}
//       </View>
//     );
//   };

//   return (

//     <View style={styles.container}>
//         <Carousel
//         ref={carouselRef}
//         sliderWidth={screenWidth}
//         sliderHeight={screenWidth}
//         itemWidth={screenWidth - 60}
//         data={entries}
//         renderItem={renderItem}
//         hasParallaxImages={true}
//         />
//     </View>
//     // <View style={styles.container}>
//     //   <TouchableOpacity onPress={goForward}>
//     //     <Text>go to next slide</Text>
//     //   </TouchableOpacity>
//     //   <Carousel
//     //     // ref={carouselRef}
//     //     sliderWidth={screenWidth}
//     //     sliderHeight={screenWidth}
//     //     itemWidth={screenWidth - 60}
//     //     // data={entries}
//     //     renderItem={renderItem}
//     //     hasParallaxImages={true}
//     //   />
//     // </View>
//   );
// }





// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop:150,
//       justifyContent:'center',
//       alignItems:'center',
//     },
//     item: {
//       width: screenWidth - 60,
//       height: screenWidth - 60,
//     },
//     imageContainer: {
//       flex: 1,
//       marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
//       backgroundColor: 'white',
//       borderRadius: 8,
//     },
//     image: {
//       ...StyleSheet.absoluteFillObject,
//       resizeMode: 'cover',
//       height:100,
//       width:200,
//     },
//   });

// export default SnapSlider;

