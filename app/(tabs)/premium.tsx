import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { deleteToken } from "@/utils/token";
import { useRouter } from "expo-router";

const Premium = () => {
    const router = useRouter();

    const [logout, setLogout] = React.useState(false);

    async function logOut() {
        await deleteToken();
        setLogout(true);
        router.push("/welcome");
    }

    return (
        <View>
            <Text>Premium</Text>
            <Pressable onPress={logOut}>
                <Text>Log out</Text>
            </Pressable>
        </View>
    );
};

export default Premium;
