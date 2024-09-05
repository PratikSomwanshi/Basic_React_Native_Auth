import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "jwt_token";
const EMAIL = "email";

interface AuthData {
    token: string;
    email: string;
}

export async function saveToken(token: string, email: string): Promise<void> {
    try {
        await SecureStore.setItemAsync(TOKEN_KEY, token);
        await SecureStore.setItemAsync(EMAIL, email);
    } catch (error) {
        console.error("Error saving token:", error);
    }
}

export async function getToken(): Promise<AuthData | null> {
    try {
        const token = await SecureStore.getItemAsync(TOKEN_KEY);
        const email = await SecureStore.getItemAsync(EMAIL);

        if (token && email) {
            return { token, email };
        }
        return null;
    } catch (error) {
        console.error("Error getting auth data:", error);
        return null;
    }
}

export async function deleteToken(): Promise<void> {
    try {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
    } catch (error) {
        console.error("Error deleting token:", error);
    }
}
