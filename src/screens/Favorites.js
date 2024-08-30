import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddressCard } from '../components/CardAddress';

export function FavoriteScreen() {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        async function fetchAddresses() {
            try {
                const jsonValue = await AsyncStorage.getItem('@addresses');
                if (jsonValue != null) {
                    const data = JSON.parse(jsonValue);
                    setAddresses(data);
                } else {
                    console.log('Nenhum dado encontrado.');
                }
            } catch (e) {
                console.error('Erro ao recuperar os dados:', e);
            }
        }

        fetchAddresses();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Favorite Page!!</Text>
                {addresses.length > 0 ? (
                    <FlatList
                        data={addresses}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <AddressCard data={item} style={{ gap: 20 }} />}
                    />
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
