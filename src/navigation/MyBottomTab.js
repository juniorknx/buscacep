import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home";
import { AboutScreen } from "../screens/About";

export function MyBottomTab() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="About"
                component={AboutScreen}
            />
        </Tab.Navigator>
    )
}