import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyBottomTab } from './src/navigation/MyBottomTab';

export default function App() {
  return (
    <NavigationContainer>
        <MyBottomTab />
    </NavigationContainer>
  );
}
