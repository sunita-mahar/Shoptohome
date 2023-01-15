import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <ImageBackground source={require('../assets/images/banner_bg_img.jpg')}></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SplashScreen
