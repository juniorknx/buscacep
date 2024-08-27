import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function FavoriteScreen() {
    const [address, setAddress] = useState(null);

    useEffect(() => {
        async function fetchAddress() {
            try {
                const jsonValue = await AsyncStorage.getItem('@user_address');
                if (jsonValue != null) {
                    const data = JSON.parse(jsonValue);
                    setAddress(data);
                } else {
                    console.log('Nenhum dado encontrado.');
                }
            } catch (e) {
                console.error('Erro ao recuperar os dados:', e);
            }
        }

        fetchAddress();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Favorite Page!!</Text>
                {address ? (
                    <Text>{`Endereço: ${address.logradouro}, ${address.bairro}, ${address.localidade}, ${address.uf}, CEP: ${address.cep}`}</Text>
                ) : (
                    <Text>Nenhum endereço salvo.</Text>
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
});
