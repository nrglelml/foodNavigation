import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Foods,Detail} from '../screens/index';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Foods" component={Foods} />
        <Stack.Screen  name="Detail" component={Detail}/>
      </Stack.Navigator>
  
  );
};

export default Navigation;
