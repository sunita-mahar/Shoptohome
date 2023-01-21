import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext, createContext, useEffect } from 'react'
import { StackNavigationState } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const AuthContext =createContext({});
export const Auth=({children})=>{

  const [user,setUser]=useState(null);
  const [authData,setAuthData]=useState([]);
  const [isLogin,setIsLogin]=useState(false);
  return(
    <AuthContext.Provider value={{isLogin,setIsLogin,authData,setAuthData,
    login:async data=>{
      try{
       setAuthData(data);
       setIsLogin(true)
       AsyncStorage.setItem('myData',JSON.stringify(data));
      }
      catch(e){
        console.error(e);
      }
    },
    loadLocalStorage: async val=>{
      try{
        const localData = await AsyncStorage.getItem('myData');
        if(localData){
          setAuthData(JSON.parse(localData));
          setIsLogin(true)
        }
      }catch(e){
        console.error(e);
      }
    }
    }}>
    {children}
    </AuthContext.Provider>
  )
};



