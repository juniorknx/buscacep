import { StyleSheet, Text, TextInput, View } from "react-native";

export function Input(props) {
    return (
        <TextInput
            {...props}
            style={styles.input}
            placeholderTextColor={'#3F3E3B'}
            maxLength={9}
        />
    )
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        width: 360,
        borderRadius: 8,
        height: 40,
        borderColor: '#72706E',
        padding: 8
    }
})