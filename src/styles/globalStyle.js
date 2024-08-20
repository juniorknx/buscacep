import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';

export const useGlobalFonts = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    });

    return fontsLoaded;
};


export const globalStyles = StyleSheet.create({
    poppinsLight: {
        fontFamily: 'Poppins-Light',
    },
    poppinsRegular: {
        fontFamily: 'Poppins-Regular',
    },
    poppinsBold: {
        fontFamily: 'Poppins-Bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
