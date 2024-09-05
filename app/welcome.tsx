import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { hp } from "@/utils/responsiveDimentions";
import Entypo from "@expo/vector-icons/Entypo";
import axios from "axios";
import useErrorHandling from "@/hooks/useErrorHandling";
import { saveToken } from "@/utils/token";
import { useRouter } from "expo-router";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Welcome: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    async function handleSubmit() {
        if (email === "" || password === "") {
            setError("Please fill all the fields");
            return;
        }

        if (!EMAIL_REGEX.test(email)) {
            setError("Please enter a valid email");
            return;
        }

        setIsLoading(true);

        console.log(email, password);

        try {
            const res = await axios.post(
                "http://192.168.1.4:8000/api/auth/login",
                {
                    email,
                    password,
                }
            );

            console.log(res.data.token);
            await saveToken(res.data.token, "jetha@gadda.com");

            router.push("/premium");
        } catch (err) {
            const error = useErrorHandling(err);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <Entypo name="email" size={hp(2.5)} color="black" />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(text) => {
                        setError("");
                        setEmail(text);
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <Entypo name="lock" size={hp(2.5)} color="black" />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={(text) => {
                        setError("");
                        setPassword(text);
                    }}
                    secureTextEntry
                />
            </View>
            <View style={styles.errorContainer}>
                {error && <Text style={styles.errorText}>{error}</Text>}
            </View>
            <View>
                <Pressable
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={isLoading}>
                    {isLoading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={styles.buttonText}>Login</Text>
                    )}
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: hp(2),
    },
    title: {
        fontSize: hp(6),
        fontWeight: "500",
        marginTop: hp(10),
        marginBottom: hp(10),
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: hp(2),
        borderWidth: hp(0.1),
        paddingHorizontal: hp(1),
        height: hp(6),
        borderRadius: hp(1),
    },
    input: {
        fontSize: hp(2),
        flex: 1,
        marginLeft: hp(1),
    },
    errorContainer: {
        height: hp(4),
        justifyContent: "center",
    },
    errorText: {
        color: "red",
        fontSize: hp(1.5),
        textAlign: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "black",
        padding: hp(1),
        borderRadius: hp(1),
    },
    buttonText: {
        color: "white",
        fontSize: hp(2),
    },
});

export default Welcome;
