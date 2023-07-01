import {Button, Text, View} from "react-native";
import React from "react";
import ProfileCard from "./Profilecard";

const Menu = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ProfileCard/>
        </View>
    );
}

export default Menu;