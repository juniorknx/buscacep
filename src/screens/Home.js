import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles, useGlobalFonts } from "../styles/globalStyle";

export function HomeScreen({ navigation }) {
    const fontsLoaded = useGlobalFonts();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={globalStyles.container}>
            <Text style={styles.title}>Buscar Cep</Text>
            <Button title="Ir para Sobre" onPress={() => navigation.navigate('Sobre', {
                id: 20,
                name: 'Julio'
            })} />
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
