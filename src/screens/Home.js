import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, SafeAreaView, ActivityIndicator, Image } from "react-native";
import { useGlobalFonts } from "../styles/globalStyle";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { formatCep } from "../helpers/formattedCep";
import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function HomeScreen({ navigation }) {
    const [cep, setCep] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
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
        console.log('Handle search')
        if (cep == '') {
            alert('Digite um CEP Válido!')
        }
        try {
            setLoading(true)
            const response = await api.get(`${cep}/json`)
            setCity(response.data)
        } catch (err) {
            console.error(err, 'ERRO AO CHAMAR API DE CEP')
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

    async function handleSave(localidade, logradouro, bairro, uf, cep) {
        try {
            const data = {
                localidade,
                logradouro,
                bairro,
                uf,
                cep
            };
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem('@user_address', jsonValue);
            console.log('Dados salvos com sucesso!');
        } catch (e) {
            console.error('Erro ao salvar os dados:', e);
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

                {city &&
                    <View style={styles.resultBox}>
                        <View style={styles.resultContainer}>
                            <Text style={styles.resultTitle}>Localidade: </Text>
                            <Text style={styles.resultContent}>{city.localidade}</Text>
                        </View>

                        <View style={styles.resultContainer}>
                            <Text style={styles.resultTitle}>Logradouro: </Text>
                            <Text style={styles.resultContent}>{city.logradouro}</Text>
                        </View>

                        {city.complemento &&
                            <View style={styles.resultContainer}>
                                <Text style={styles.resultTitle}>Complemento: </Text>
                                <Text style={styles.resultContent}>{city.complemento}</Text>
                            </View>
                        }

                        <View style={styles.resultContainer}>
                            <Text style={styles.resultTitle}>Bairro: </Text>
                            <Text style={styles.resultContent}>{city.bairro}</Text>
                        </View>

                        <View style={styles.resultContainer}>
                            <Text style={styles.resultTitle}>UF: </Text>
                            <Text style={styles.resultContent}>{city.uf}</Text>
                        </View>

                        <View style={styles.resultContainer}>
                            <Text style={styles.resultTitle}>CEP: </Text>
                            <Text style={styles.resultContent}>{city.cep}</Text>
                        </View>

                        <View style={styles.resultFooter}>
                            <TouchableOpacity style={styles.footerButton} onPress={() => handleSave(city.localidade, city.logradouro, city.bairro, city.uf, city.cep)}>
                                <Text style={styles.footerBtnText}>Salvar</Text>
                                <Image source={require('../../assets/icons/downloadicon.png')} style={styles.icon} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.footerButton} onPress={handleNewSearch}>
                                <Text style={styles.footerBtnText}>Nova Busca</Text>
                                <Image source={require('../../assets/icons/newicon.png')} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
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
    },

    resultBox: {
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: "#fff",
        width: 355,
        height: 350,
        borderRadius: 10,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
    },

    resultTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold'
    },

    resultContent: {
        fontSize: 14,
        fontFamily: 'Poppins-Light'
    },

    resultFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 15,
        gap: 10
    },

    footerButton: {
        backgroundColor: '#FFC20E',
        width: 122,
        padding: 5,
        borderRadius: 4,
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    footerBtnText: {
        color: '#00416B',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 13
    },

    icon: {
        width: 14,
        height: 14
    }
});
