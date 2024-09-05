import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { getToken } from "@/utils/token";
import { hp } from "@/utils/responsiveDimentions";

const index = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    const navigateToPremium = (token: any) => {
        if (token.token && token.email) {
            router.push("/premium");
        } else {
            console.log("Invalid token data");
            // Handle the case where token or email is missing
        }
    };

    // Check and execute after 500ms

    useEffect(() => {
        async function fetchData() {
            const token = await getToken();
            // console.log("tocken " + tok);
            setLoading(true);
            if (token) {
                setTimeout(() => {
                    navigateToPremium(token);
                    setLoading(false);
                }, 500);
            } else {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text
                    style={{
                        fontSize: hp(3),
                        fontWeight: "bold",
                    }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>rohans</Text>
            <Link href="/welcome">
                <Text style={styles.text}>Login</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default index;
