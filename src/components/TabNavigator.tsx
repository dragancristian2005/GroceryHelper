import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/app/HomeScreen";
import AddProductScreen from "../screens/app/AddProductScreen";
import SettingsScreen from "../screens/app/SettingsScreen";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
    >
      <Tab.Screen name={"Home"} component={HomeScreen} />
      <Tab.Screen name={"AddProduct"} component={AddProductScreen} />
      <Tab.Screen name={"Settings"} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#005BAA",
    position: "absolute",
  },
});

export default TabNavigator;
