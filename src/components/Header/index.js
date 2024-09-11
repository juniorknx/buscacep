import { Image, StyleSheet, Text, View } from "react-native";

export function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={require('../../../assets/images/correiologo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20
    },
})