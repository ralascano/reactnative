import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ListComponent from "./components/list/List";
import Menu from "./components/home/Menu";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Nombre from "./components/nombre/Nombre";


// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {

    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name="list" component={ListComponent}  options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name="nombre" component={Nombre}  options={{
                tabBarLabel: 'Nombre',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bag-personal" color={color} size={size} />
                ),
            }}/>
        </Tab.Navigator>
        // <Stack.Navigator initialRouteName="Home">
        //     <Stack.Screen name={'Home'} component={Menu}/>
        //     <Stack.Screen name={'list'} component={ListComponent}/>
        // </Stack.Navigator>
    );
}



export default Navigation;