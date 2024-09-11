import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export function AddressCard({ data, onPress, onSaveAddress, defaultFooter }) {
    return (
        <View style={styles.resultBox}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>Localidade: </Text>
                <Text style={styles.resultContent}>{data.localidade}</Text>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>Logradouro: </Text>
                <Text style={styles.resultContent}>{data.logradouro}</Text>
            </View>

            {data.complemento &&
                <View style={styles.resultContainer}>
                    <Text style={styles.resultTitle}>Complemento: </Text>
                    <Text style={styles.resultContent}>{data.complemento}</Text>
                </View>
            }

            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>Bairro: </Text>
                <Text style={styles.resultContent}>{data.bairro}</Text>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>UF: </Text>
                <Text style={styles.resultContent}>{data.uf}</Text>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>CEP: </Text>
                <Text style={styles.resultContent}>{data.cep}</Text>
            </View>

            {defaultFooter &&
                <View style={styles.resultFooter}>
                    <TouchableOpacity style={styles.footerButton} onPress={onSaveAddress}>
                        <Text style={styles.footerBtnText}>Salvar</Text>
                        <Image source={require('../../../assets/icons/downloadicon.png')} style={styles.icon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.footerButton} onPress={onPress}>
                        <Text style={styles.footerBtnText}>Nova Busca</Text>
                        <Image source={require('../../../assets/icons/newicon.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            }

            {!defaultFooter &&
                <View style={styles.resultFooter}>
                    <TouchableOpacity style={styles.footerButton} onPress={onPress}>
                        <Text style={styles.footerBtnText}>Remover</Text>
                        <Image source={require('../../../assets/icons/cancel.png')} style={styles.iconRemove} />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
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
    },

    iconRemove: {
        width: 10,
        height: 10
    }
});
