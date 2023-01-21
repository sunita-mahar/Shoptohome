import React, { useContext } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthContext } from '../context/Auth';
import Home from '../component/Home';
import Splash from '../component/Splash';
import Login from '../component/Login';


const HomeStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

 const Router = ({children}) => {

const {isLogin}=useContext(AuthContext);
useEffect(() => {
  console.log('Router.js', isLogin);
}, [isLogin]);

return (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName={Splash}
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Splash" component={Splash} />
      <MainStack.Screen name="HomeStack" component={MyHomeStack} />
    </MainStack.Navigator>
  </NavigationContainer>
);
function MyHomeStack() {
  return (
    <HomeStack.Navigator
      initialRouteName={Splash}
      screenOptions={{
        headerShown: false,
      }}>
      {isLogin ? (
        <>
          <HomeStack.Screen name="Homemain" component={Home} />
        </>
      ) : (
        <>
          <HomeStack.Screen name="Login" component={Login} />
        </>
      )}
    </HomeStack.Navigator>
  );
}
};

export default Router