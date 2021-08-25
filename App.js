import { StatusBar } from 'expo-status-bar';
import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './firebase';
import { auth } from './firebase'; 
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/sessions/LoginScreen';
import oldScreen from './App3';
import RegisterScreen from './screens/sessions/RegisterScreen'

const Stack = createStackNavigator();

export default function App() {
  const [signedIn, setsignedIn] = useState(false);
  
  auth.onAuthStateChanged((use) => {
    if (user) {
      setsignedIn(true);
    } else {
      setsignedIn(false);
    }
  });

  return (
    <NavigationContainer theme={DefaultTheme}>
      {signedIn
        ? (
          <Text>Signed In</Text>
        ) : (
          <>
          <StatusBar style="light" />
          <Stack.Navigator
          mode="card"
          screenOptions={{}}
          >
            <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: 'LoginScreen',
              cardStyleInterpolator: forFade,
              headerStyle: {
                backgroundColor: '#29434e',
                borderBottomColor: '#29434e',
                
              },
              headerTintColor: '#fff'
            }}/>
            <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              title: 'RegisterScreen',
              cardStyleInterpolator: forFade,
              headerStyle: {
                backgroundColor: '#29434e',
                borderBottomColor: '#29434e',
              },
              headerTintColor: '#fff'
            }}/>
            </Stack.Navigator>
            </>
        )
      }
      </NavigationContainer>
  );
}



const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
    backgroundColor: 'transparent',
  },
});