import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStacknavigator from './src/navigation/navigator';


export default function App() {
  return (
    <NavigationContainer>
      <HomeStacknavigator/>
    </NavigationContainer>
  );
}