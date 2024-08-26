import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button, TouchableOpacity, Keyboard, SafeAreaView } from "react-native";
import { globalStyles, useGlobalFonts } from "../styles/globalStyle";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { formatCep } from "../helpers/formattedCep";
import { api } from '../services/api'

export function HomeScreen({ navigation }) {
    const [cep, setCep] = useState('')
    const [city, setCity] = useState('')
    const fontsLoaded = useGlobalFonts();

    useEffect(() => {
        if (cep.length === 0) {
            Keyboard.dismiss()
        }
    }, [cep])

    if (!fontsLoaded) {
        return null;
    }

    async function handleSearch() {
        console.log('Hadle search')
        if (cep == '') {
            alert('Digite um CEP Válido!')
        }
        try {
            const response = await api.get(`${cep}/json`)
            setCity(response.data)
            console.log('FROM CITY ===>', city)
        } catch (err) {
            console.error(err, 'ERRO AO CHAMAR API DE CEP')
        } finally {
            Keyboard.dismiss()
        }
    }

    function handleCepChange(text) {
        const formattedCep = formatCep(text)
        setCep(formattedCep)
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Header />
                <View style={styles.inputView}>
                    <Input
                        placeholder="Digite o seu CEP"
                        value={cep}
                        onChangeText={handleCepChange}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.button} onPress={handleSearch}>
                        <Text style={styles.buttonText}>Buscar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.resultBox}>
                    <View style={styles.resultContainer}>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBF9F6',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold'
    },

    inputView: {
        marginTop: 30
    },

    btnArea: {
        margin: 25
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#006399',
        padding: 10,
        width: 350,
        borderRadius: 9
    },

    buttonText: {
        fontFamily: 'Poppins-Regular',
        color: '#fff',
        fontSize: 15
    }
});
