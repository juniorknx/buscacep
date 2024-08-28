import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export function ToastMessage({ message, typeMessage }) {
    const [isVisible, setIsVisible] = useState(true);
    const slideAnim = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            Animated.timing(slideAnim, {
                toValue: 100,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setIsVisible(false);
            });
        }, 4000);
        return () => clearTimeout(timer);
    }, [slideAnim]);

    if (!isVisible) {
        return null;
    }

    return (
        <Animated.View style={[style.toastContainer, { transform: [{ translateY: slideAnim }] }, { backgroundColor: typeMessage === 'error' ? 'red' : 'green' }]}>
            {typeMessage === 'error' ? <Icon name="warning" size={18} color="#fff" /> : <Icon name="check-circle" size={18} color="#fff" />}
            <Text style={style.message}>
                {message}
            </Text>
        </Animated.View>
    );
}

const style = StyleSheet.create({
    toastContainer: {
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        height: 40,
        width: 300,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },

    message: {
        fontFamily: 'Poppins-Bold',
        color: '#fff',
        fontSize: 10,
    }
});
