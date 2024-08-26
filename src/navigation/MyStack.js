import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/Home"
import { AboutScreen } from "../screens/About"

export function MyStack() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Sobre"
                component={AboutScreen}
            />
        </Stack.Navigator>
    )
}