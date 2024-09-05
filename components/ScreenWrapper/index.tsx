import { View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { wp } from "@/utils/responsiveDimentions";

const index = ({ children }: { children: React.ReactNode }) => {
    const { top } = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                paddingTop: top,
                paddingHorizontal: wp(5),
            }}>
            {children}
        </View>
    );
};

export default index;
