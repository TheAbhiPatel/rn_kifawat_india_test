import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Singup from '../screens/Singup';
import Login from '../screens/Login';
import Home from '../screens/Home';

export type RootNativeStackParamList = {
  Signup: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Singup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackRoutes;

const styles = StyleSheet.create({});
