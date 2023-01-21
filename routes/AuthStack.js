import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../component/Login'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack