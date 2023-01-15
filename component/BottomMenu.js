import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const BottomMenu = () => {
 
    //const Tab = createBottomTabNavigator();

    const navigation = useNavigation()

  return (
    <View style={styles.bottomMenuContainer}>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("home")}>
            <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("toDoList")}>
            <Text>ToDoList</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("searchList")}>
            <Text>searchList</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("userProfile")}>
            <Text>User Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButtonStyle} onPress={()=>navigation.navigate("category")}>
            <Text>Category</Text>
        </TouchableOpacity>


    </View>




    // <NavigationContainer>
    //     <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;

    //         if (route.name === 'Home') {
    //           iconName = focused
    //             ? 'ios-information-circle'
    //             : 'ios-information-circle-outline';
    //         } else if (route.name === 'Settings') {
    //           iconName = focused ? 'ios-list' : 'ios-list-outline';
    //         }

    //         // You can return any component that you like here!
    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //       tabBarActiveTintColor: 'tomato',
    //       tabBarInactiveTintColor: 'gray',
    //     })}
    //   >
    //         <Tab.Screen name="home" component={Home} options={{ tabBarBadge: 3 }}/>
    //     </Tab.Navigator>
    // </NavigationContainer>
  )
}


const styles = StyleSheet.create({

    bottomMenuContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
    },

    bottomButtonStyle:{
        textTransform:'uppercase',
        marginBottom:23,
        //backgroundColor:"blue",
        padding:10,
        
    }



})


export default BottomMenu

    