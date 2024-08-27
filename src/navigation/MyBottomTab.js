import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home";
import { FavoriteScreen } from "../screens/Favorites";
import { Image } from "react-native";

export function MyBottomTab() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Buscar"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: (size, color) => {
                        return <Image source={require('../../assets/icons/searchicon.png')} />
                    }
                }}
            />

            <Tab.Screen
                name="Favoritos"
                component={FavoriteScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: (size, color) => {
                        return <Image source={require('../../assets/icons/mapicon.png')} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}