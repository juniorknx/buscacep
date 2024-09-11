import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { useGlobalFonts } from "../styles/globalStyle";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { useState } from "react";
import { formatCep } from "../helpers/formattedCep";
import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastMessage } from "../components/Toast";
import { AddressCard } from "../components/CardAddress";

export function HomeScreen({ navigation }) {
    const [cep, setCep] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const fontsLoaded = useGlobalFonts();

    if (!fontsLoaded) {
        return null;
    }

    async function handleSearch() {
        console.log('Handle search')

        if (cep === '') {
            alert('Digite um CEP Válido!')
            return
        }

        try {
            setLoading(true)
            const response = await api.get(`${cep}/json`)
            if (!response.data || response.data.erro) {
                setCity(null)
                setErrorMessage(true)
            } else {
                setCity(response.data)
                setErrorMessage(false)
            }
        } catch (err) {
            console.error(err, 'ERRO AO CHAMAR API DE CEP')
            setErrorMessage(true)
            setCity(null)
        } finally {
            setLoading(false)
            Keyboard.dismiss()
        }
    }


    function handleCepChange(text) {
        const formattedCep = formatCep(text)
        setCep(formattedCep)
    }

    function handleNewSearch() {
        setCep('')
        setCity('')
    }

    async function handleSaveAddress(city) {
        try {
            const existingAddresses = await AsyncStorage.getItem('@addresses');
            const addressesArray = existingAddresses ? JSON.parse(existingAddresses) : [];
            const isCepAlreadySaved = addressesArray.some(address => address.cep === city.cep);

            if (isCepAlreadySaved) {
                console.log('Esse endereço já foi salvo anteriormente.');
                Alert.alert('Erro', 'O endereço ja foi salvo.')
                return;
            }

            addressesArray.push(city);
            await AsyncStorage.setItem('@addresses', JSON.stringify(addressesArray));
            Alert.alert('', 'Endereço salvo com sucesso!')
        } catch (error) {
            console.error('Erro ao salvar o endereço:', error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <StatusBar style="auto" backgroundColor="#61dafb" />
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
                        <Text style={styles.buttonText}>
                            {loading ? <ActivityIndicator size="small" /> : 'Buscar'}
                        </Text>
                    </TouchableOpacity>
                </View>

                {errorMessage ? (
                    <ToastMessage
                        message={'Nenhum endereço encontrado'}
                        typeMessage={'error'}
                    />
                ) : (
                    city && <AddressCard data={city} defaultFooter={true} onPress={handleNewSearch} onSaveAddress={() => handleSaveAddress(city)} />
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF9F6',
        alignItems: 'center',
    },

    content: {
        flex: 1,
        alignItems: 'center'
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
