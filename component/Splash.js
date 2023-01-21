import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import  { AuthContext } from '../context/Auth'

const Splash = () => {

    const navigation = useNavigation();
    const {isLogin} = useContext(AuthContext);

    useEffect(() =>{
        setTimeout(()=>{
            this._redirectTo();
        },
        2000);
    },[])

    _redirectTo=async()=>{
        isLogin?
        navigation.navigate('Homemain')
        :
        navigation.navigate('Login')
    }
    



  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash