import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles, useGlobalFonts } from "../styles/globalStyle";

export function AboutScreen() {
    const fontsLoaded = useGlobalFonts();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={globalStyles.container}>
            <Text style={styles.title}>About Page!!!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold'
    }
});
