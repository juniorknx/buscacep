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
    }, [addresses]);

    async function handleRemove(addressToRemove) {
        try {
            const filteredAddresses = addresses.filter(item => item !== addressToRemove);
            setAddresses(filteredAddresses);
            await AsyncStorage.setItem('@addresses', JSON.stringify(filteredAddresses));
        } catch (e) {
            console.error('Erro ao remover o endereço:', e);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Meus Endereços: {addresses.length}</Text>
                {addresses.length > 0 ? (
                    <FlatList
                        data={addresses}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <AddressCard
                                data={item}
                                onPress={() => handleRemove(item)}
                            />
                        )}
                        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                        contentContainerStyle={{ paddingBottom: 10, paddingLeft: 10, paddingRight: 10 }}
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

    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 23,
        marginTop: 25,
        marginBottom: 20
    }
});
