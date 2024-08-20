import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyle";

export function HomeScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.title}>Home Page!!!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: globalStyles.poppinsBold
    }
  });
  