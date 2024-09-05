import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <ScreenWrapper>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </ScreenWrapper>
    );
};

export default RootLayout;
