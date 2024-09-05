import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen name="premium" />
            <Tabs.Screen name="user" />
        </Tabs>
    );
};

export default TabLayout;
