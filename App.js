import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; 
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/sessions/LoginScreen';
import RegisterScreen from './screens/sessions/RegisterScreen'

const Stack = createStackNavigator();

export default function App() {
  const [signedIn, setsignedIn] = useState(false);

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      backgroundColor: 'transparent',
    },
  });
  
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