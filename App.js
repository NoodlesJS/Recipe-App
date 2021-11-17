import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { Home, Search, Recipe } from './app/screens';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    interR: require('./app/assets/fonts/Inter-Regular.ttf'),
    interM: require('./app/assets/fonts/Inter-Medium.ttf'),
    interB: require('./app/assets/fonts/Inter-Bold.ttf'),
  })

  if(!fontsLoaded) {
    return <ActivityIndicator size="large" />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
