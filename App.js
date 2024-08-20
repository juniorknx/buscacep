import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useGlobalFonts, globalStyles } from './src/styles/globalStyle';

export default function App() {
  const fontsLoaded = useGlobalFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <Text style={globalStyles.poppinsRegular}>Open up App.js to start working on your app!</Text>
      <Text style={globalStyles.poppinsLight}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold'
  }
});
