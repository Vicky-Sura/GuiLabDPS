import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/About';
import About from '../screens/About';
const Stack= createStackNavigator();
export default function HomeStack(){
 return(
 <Stack.Navigator>
 <Stack.Screen name="about" component={About}
options={{title:'About'}}/>
 </Stack.Navigator>
 );
}